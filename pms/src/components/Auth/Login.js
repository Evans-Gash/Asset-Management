// src/components/Auth/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setRole }) => {
  const [userRole, setUserRole] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (userRole) {
      setRole(userRole);
      // Redirect based on role
      navigate(`/${userRole.toLowerCase()}`);
    }
  };

  return (
    <div className="container mx-auto my-10">
      <h2 className="text-2xl font-bold mb-6">Login</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <select
          value={userRole}
          onChange={(e) => setUserRole(e.target.value)}
          required
          className="border p-2 w-full"
        >
          <option value="">Select Role</option>
          <option value="Landlord">Landlord</option>
          <option value="PropertyManager">Property Manager</option>
          <option value="Tenant">Tenant</option>
        </select>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
