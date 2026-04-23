import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Employee from "./components/Employee";
import Department from "./components/Department";
import Salary from "./components/Salary";
import Reports from "./components/Reports";
import Login from "./components/Login";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/department" element={<Department />} />
        <Route path="/Salary" element={<Salary />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;