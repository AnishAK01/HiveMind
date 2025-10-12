import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import API from "../utils/axios";
import { useNavigate } from "react-router-dom";

const LoginRegister = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    profilepic: null,
    role: ""
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "profilepic") {
      setForm({ ...form, profilepic: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const endpoint = isLogin ? "/auth/login" : "/auth/register";

      let payload;
      let headers;

      if (isLogin) {
        payload = {
          username: form.username,
          
          password: form.password
        };
        headers = { "Content-Type": "application/json" };
      } else {
        payload = {
          name: form.name,
          username: form.username,
          email: form.email,
          password: form.password,
          role: form.role
        };
        headers = { "Content-Type": "application/json" };
      }

      const res = await API.post(endpoint, payload, { headers });

      login(res.data);
      navigate("/");
    } catch (err) {
      console.error("Auth error:", err);
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-purple-200 to-blue-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-96">
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setIsLogin(true)}
            className={`px-4 py-2 rounded-l-full font-semibold ${isLogin ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`px-4 py-2 rounded-r-full font-semibold ${!isLogin ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          >
            Register
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {!isLogin && (
            <>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                className="p-2 border rounded focus:outline-blue-400"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                className="p-2 border rounded focus:outline-blue-400"
                required
              />
              <label htmlFor="role">Choose your role:</label>
              <select
                id="role"
                name="role"
                value={form.role}
                onChange={handleChange}
                className="p-2 border rounded focus:outline-blue-400"
                required
              >
                <option value="">Select Role</option>
                <option value="student">Student</option>
                <option value="designer">UI/UX Designer</option>
                <option value="developer">Developer</option>
              </select>

              {/* <input
                type="file"
                name="profilepic"
                accept="image/*"
                onChange={handleChange}
                className="p-2 border rounded focus:outline-blue-400"
                required
              /> */}

            </>
          )}

          

          <input
            type="text"
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            className="p-2 border rounded focus:outline-blue-400"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="p-2 border rounded focus:outline-blue-400"
            required
          />

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginRegister;
