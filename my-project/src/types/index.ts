export interface Employee {
  id: number;
  name: string;
  employeeId: string;
  department?: string;
}

export interface Attendance {
  employeeId: number;
  date: string;
  status: "present" | "absent";
}