import { useEffect, useState } from "react";
import axios from "axios";

function Reports() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/report")
      .then(res => setData(res.data));
  }, []);
return (
  <div className="p-6 max-w-5xl mx-auto">
    <h2 className="text-2xl font-bold mb-4 text-gray-800">
      Monthly Payroll
    </h2>

    <div className="overflow-x-auto shadow-md rounded-lg">
      <table className="min-w-full border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 border text-left">Name</th>
            <th className="px-4 py-2 border text-left">Position</th>
            <th className="px-4 py-2 border text-left">Department</th>
            <th className="px-4 py-2 border text-left">Net Salary</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, i) => (
            <tr
              key={i}
              className="hover:bg-gray-50 transition duration-200"
            >
              <td className="px-4 py-2 border">
                {item.firstName} {item.lastName}
              </td>
              <td className="px-4 py-2 border">{item.position}</td>
              <td className="px-4 py-2 border">{item.departmentName}</td>
              <td className="px-4 py-2 border font-semibold text-green-600">
                {item.netSalary}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);
  
}

export default Reports;