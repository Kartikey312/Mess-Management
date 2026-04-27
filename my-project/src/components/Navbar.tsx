import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="bg-gray-900 text-white px-6 py-3 flex justify-between items-center shadow-md">
      <h1 className="font-bold text-lg">Mess Manager</h1>

      <div className="flex gap-6">
        <Link to="/" className="hover:text-gray-300">Dashboard</Link>
        <Link to="/add" className="hover:text-gray-300">Add Employee</Link>
        <Link to="/guest" className="hover:text-gray-300">Guest</Link>
        <Link to="/reports" className="hover:text-gray-300">Reports</Link>
      </div>
    </div>
  );
};

export default Navbar;