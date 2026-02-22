import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 shadow rounded w-96">
        <h2 className="text-2xl mb-4 font-bold">Login</h2>

        <input className="w-full mb-3 p-2 border" placeholder="Email" />
        <input className="w-full mb-3 p-2 border" placeholder="Password" type="password" />

        <button className="w-full bg-blue-600 text-white py-2 rounded">
          Login
        </button>

        <p className="mt-4 text-sm">
          New user? <Link to="/register" className="text-blue-600">Register</Link>
        </p>
      </div>
    </div>
  );
}