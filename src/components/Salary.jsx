import { useState, useEffect } from "react";
import axios from "axios";

function Salary() {
  const [data, setData] = useState({});
  const [list, setList] = useState([]);

  const load = () => {
    axios.get("http://localhost:5000/salary")
      .then(res => setList(res.data));
  };

  useEffect(() => { load(); }, []);

  const handleSubmit = () => {
    axios.post("http://localhost:5000/salary", data)
      .then(() => load());
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/salary/${id}`)
      .then(() => load());
  };
return (
  <div className="p-6 max-w-2xl mx-auto">
    <h2 className="text-2xl font-bold mb-4">Salary</h2>
    <div className="grid grid-cols-2 gap-3">
      <input placeholder="Employee Number"
        className="border rounded p-2"
        onChange={e => setData({...data, employeeNumber: e.target.value})} />

      <input placeholder="Gross Salary"
        className="border rounded p-2"
        onChange={e => setData({...data, grossSalary: e.target.value})} />

      <input placeholder="Total Deduction"
        className="border rounded p-2"
        onChange={e => setData({...data, totalDeduction: e.target.value})} />

      <input placeholder="Net Salary"
        className="border rounded p-2"
        onChange={e => setData({...data, netSalary: e.target.value})} />

      <input placeholder="Month"
        className="border rounded p-2 col-span-2"
        onChange={e => setData({...data, month: e.target.value})} />
    </div>
    <button
      className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 mt-4 rounded"
      onClick={handleSubmit}
    >
      Add
    </button>

    <table className="w-full mt-6 border border-gray-300">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-2 border">ID</th>
          <th className="p-2 border">Net Salary</th>
          <th className="p-2 border">Action</th>
        </tr>
      </thead>
      <tbody>
        {list.map(item => (
          <tr key={item.salaryId} className="text-center">
            <td className="border p-2">{item.salaryId}</td>
            <td className="border p-2">{item.netSalary}</td>
            <td className="border p-2">
              <button
                className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
                onClick={() => handleDelete(item.salaryId)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
}

export default Salary;