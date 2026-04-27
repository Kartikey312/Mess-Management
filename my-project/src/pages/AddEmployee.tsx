import { useState } from "react";
import API from "../services/api";

const AddEmployee = () => {
  const [name, setName] = useState("");
  const [employeeId, setEmployeeId] = useState("");

  const handleSubmit = async () => {
    await API.post("/employee", { name, employeeId });
    alert("Employee Added");
  };

  return (
    <div className="p-6">
      <div className="bg-white p-6 rounded shadow w-96">
        <h2 className="text-xl font-bold mb-4">Add Employee</h2>

        <input
          className="border p-2 w-full mb-3 rounded"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="border p-2 w-full mb-3 rounded"
          placeholder="Employee ID"
          onChange={(e) => setEmployeeId(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddEmployee;