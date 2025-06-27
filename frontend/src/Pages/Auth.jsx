// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Mail, Lock, UserPlus } from 'lucide-react';

// const Auth = () => {
//   const [isSignup, setIsSignup] = useState(false);
//   const [form, setForm] = useState({ name: '', email: '', password: '' });

//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (isSignup) {
//       console.log('Registering:', form);
//     } else {
//       console.log('Logging in:', form);
//     }
//   };

//   return (
//     <div className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white relative overflow-hidden">
//       {/* Cool background shapes */}
//       <div className="absolute w-96 h-96 bg-pink-500 rounded-full blur-3xl opacity-30 top-[-100px] left-[-100px] animate-pulse"></div>
//       <div className="absolute w-96 h-96 bg-cyan-400 rounded-full blur-3xl opacity-20 bottom-[-100px] right-[-100px] animate-pulse"></div>

//       {/* Card */}
//       <motion.div
//         initial={{ opacity: 0, y: 60 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="z-10 bg-white text-gray-900 rounded-2xl shadow-2xl p-8 w-full max-w-md"
//       >
//         <h2 className="text-3xl font-extrabold mb-6 text-center">
//           {isSignup ? 'Create Account' : 'Welcome Back'}
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           {isSignup && (
//             <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
//               <UserPlus className="text-gray-500 mr-2" size={18} />
//               <input
//                 name="name"
//                 type="text"
//                 placeholder="Your Name"
//                 value={form.name}
//                 onChange={handleChange}
//                 className="flex-1 outline-none bg-transparent"
//               />
//             </div>
//           )}

//           <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
//             <Mail className="text-gray-500 mr-2" size={18} />
//             <input
//               name="email"
//               type="email"
//               placeholder="Email"
//               value={form.email}
//               onChange={handleChange}
//               required
//               className="flex-1 outline-none bg-transparent"
//             />
//           </div>

//           <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
//             <Lock className="text-gray-500 mr-2" size={18} />
//             <input
//               name="password"
//               type="password"
//               placeholder="Password"
//               value={form.password}
//               onChange={handleChange}
//               required
//               className="flex-1 outline-none bg-transparent"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg mt-4 font-semibold hover:from-blue-700 hover:to-purple-700 transition-all"
//           >
//             {isSignup ? 'Sign Up' : 'Log In'}
//           </button>
//         </form>

//         <p className="mt-4 text-center text-sm text-gray-500">
//           {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
//           <span
//             onClick={() => setIsSignup(!isSignup)}
//             className="text-blue-600 font-medium cursor-pointer hover:underline"
//           >
//             {isSignup ? 'Log In' : 'Sign Up'}
//           </span>
//         </p>
//       </motion.div>
//     </div>
//   );
// };

// export default Auth;

import React, { useState, useContext } from "react";
import { AuthContext } from "../context/authContext";
import API from "../utils/axios";
import { useNavigate } from "react-router-dom";

const LoginRegister = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const endpoint = isLogin ? "/users/login" : "/users/register";
      const payload = isLogin ? {
        email: form.email,
        password: form.password
      } : form;

      const res = await API.post(endpoint, payload);
      login(res.data);
      navigate("/");
    } catch (err) {
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
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              className="p-2 border rounded focus:outline-blue-400"
              required
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
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

