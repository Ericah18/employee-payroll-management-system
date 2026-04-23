import { useState } from "react";
import axios from "axios";

function Department() {
  const [data, setData] = useState({});

  const handleSubmit = () => {
    axios.post("http://localhost:5000/department", data)
      .then(res => alert(res.data));
  };

 return (
  <div className="min-h-screen bg-gray-100 flex items-center justify-center">
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Department Form
      </h2>

      <div className="space-y-4">
        <input
          placeholder="Code"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          onChange={e => setData({ ...data, departmentCode: e.target.value })}
        />

        <input
          placeholder="Name"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          onChange={e => setData({ ...data, departmentName: e.target.value })}
        />

        <input
          placeholder="Gross Salary"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          onChange={e => setData({ ...data, grossSalary: e.target.value })}
        />
      </div>

      <button
        className="w-full mt-6 bg-green-500 hover:bg-green-600 text-white py-2 rounded transition duration-200"
        onClick={handleSubmit}
      >
        Save
      </button>

    </div>
  </div>
);
}

export default Department;