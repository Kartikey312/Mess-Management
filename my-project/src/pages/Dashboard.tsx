import { useEffect, useState } from "react";
import API from "../services/api";
// import { Employee } from "../types";

 interface Employee {
  id: number;
  name: string;
  employeeId: string;
  department?: string;
}
const Dashboard = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const res = await API.get("/employee");
      setEmployees(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const markAttendance = async (id: number, status: string) => {
    await API.post("/attendance", {
      employeeId: id,
      date: new Date(),
      status,
    });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Today's Attendance</h2>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Employee ID</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((emp) => (
              <tr key={emp.id} className="border-t hover:bg-gray-50">
                <td className="p-3">{emp.name}</td>
                <td className="p-3">{emp.employeeId}</td>

                <td className="p-3 flex gap-2">
                  <button
                    onClick={() => markAttendance(emp.id, "present")}
                    className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                  >
                    Present
                  </button>

                  <button
                    onClick={() => markAttendance(emp.id, "absent")}
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Absent
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;