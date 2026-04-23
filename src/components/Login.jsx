import { useState } from "react";
import axios from "axios";

function Login() {
  const [data, setData] = useState({});

  const handleLogin = () => {
    axios.post("http://localhost:5000/login", data)
      .then(res => alert(res.data));
  };

 return (
  <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
      
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Login
      </h2>

      <input
        type="text"
        placeholder="Username"
        className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        onChange={e => setData({ ...data, username: e.target.value })}
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full border border-gray-300 rounded px-3 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-400"
        onChange={e => setData({ ...data, password: e.target.value })}
      />

      <button
        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded transition duration-200"
        onClick={handleLogin}
      >
        Login
      </button>

    </div>
  </div>
);
}

export default Login;