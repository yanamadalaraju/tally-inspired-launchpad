import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../assets/Mcrt-logo-removebg-preview.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/login', { email, password });
      if (res.data.success) {
        localStorage.setItem('isAuthenticated', 'true');
        navigate('/admin-dashboard');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#e0eafc] to-[#cfdef3] px-4">
      <div className="w-full max-w-4xl flex flex-col md:flex-row bg-white/30 backdrop-blur-md shadow-2xl rounded-2xl overflow-hidden">
  {/* Left Side */}
  <div className="md:w-6/12 flex flex-col items-center justify-center bg-gradient-to-br from-[#99ccff] to-[#66b3ff] px-6 py-8">
  <img src={logo} alt="Logo" className="h-32 mb-4" />
  <h3 className="text-[#003366] text-2xl font-semibold text-center mb-2">MCRT Admin</h3>
  <p className="text-[#003366] text-xs text-center mt-2 px-2">
    Admin portal for managing system operations. Authorized personnel only.
  </p>
</div>




  {/* Right Side */}
  <div className="md:w-6/12 p-6 sm:p-10">
    <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Admin Login</h2>
    {error && <p className="text-red-600 text-center text-sm mb-4">{error}</p>}
    <form onSubmit={handleLogin} className="space-y-5">
      <div>
        <label className="block text-gray-700 text-sm mb-1">Email</label>
        <input
          type="email"
          className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="admin@admin.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="block text-gray-700 text-sm mb-1">Password</label>
        <input
          type="password"
          className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="admin123"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-[#003366] hover:bg-[#00254d] text-white text-sm font-medium py-2.5 rounded-md transition duration-300"
      >
        Sign In
      </button>
    </form>
  </div>
</div>

    </div>
  );
};

export default Login;
