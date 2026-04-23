import { useState } from "react";
import axios from "axios";

function Employee() {
  const [data, setData] = useState({});

  const handleSubmit = () => {
    axios.post("http://localhost:5000/employee", data)
      .then(res => alert(res.data));
  };

 return (
  <div className="min-h-screen bg-gray-100 flex items-center justify-center">
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-3xl">
      
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Employee Form
      </h2>

      <div className="grid grid-cols-2 gap-4">
        <input
          placeholder="First Name"
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          onChange={e => setData({ ...data, firstName: e.target.value })}
        />

        <input
          placeholder="Last Name"
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          onChange={e => setData({ ...data, lastName: e.target.value })}
        />

        <input
          placeholder="Position"
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          onChange={e => setData({ ...data, position: e.target.value })}
        />

        <input
          placeholder="Address"
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          onChange={e => setData({ ...data, address: e.target.value })}
        />

        <input
          placeholder="Telephone"
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          onChange={e => setData({ ...data, telephone: e.target.value })}
        />

        <input
          placeholder="Gender"
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          onChange={e => setData({ ...data, gender: e.target.value })}
        />

        <input
          type="date"
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          onChange={e => setData({ ...data, hiredDate: e.target.value })}
        />

        <input
          placeholder="Department Code"
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          onChange={e => setData({ ...data, departmentCode: e.target.value })}
        />
      </div>

      <button
        className="mt-6 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded transition duration-200"
        onClick={handleSubmit}
      >
        Save
      </button>

    </div>
  </div>
); 
}

export default Employee;