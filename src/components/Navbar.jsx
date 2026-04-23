import { Link } from "react-router-dom";

function Navbar() {
 return (
  <div className="bg-blue-600 text-white px-6 py-3 flex items-center justify-between shadow-md">
    
    <h1 className="text-lg font-bold tracking-wide">
      Payroll System
    </h1>

    <div className="flex gap-6">
      <Link to="/employee" className="hover:text-gray-200 transition duration-200">
        Employee
      </Link>

      <Link to="/department" className="hover:text-gray-200 transition duration-200">
        Department
      </Link>

      <Link to="/salary" className="hover:text-gray-200 transition duration-200">
        Salary
      </Link>

      <Link to="/reports" className="hover:text-gray-200 transition duration-200">
        Reports
      </Link>
       <Link to="/Layout" className="hover:text-gray-200 transition duration-200">
        Layout
      </Link>

      <Link
        to="/"
        className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded transition duration-200"
      >
        Logout
      </Link>
    </div>
  </div>
);
}

export default Navbar;