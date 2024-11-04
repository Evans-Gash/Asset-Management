// src/components/Common/Navbar.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ role, setRole }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setRole('');
    navigate('/');
  };

  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">Property Management System</h1>
        <ul className="flex space-x-4">
          {role === 'Landlord' && <li><a href="/landlord">Dashboard</a></li>}
          {role === 'PropertyManager' && <li><a href="/propertymanager">Manage Properties</a></li>}
          {role === 'Tenant' && <li><a href="/tenant">My Rent</a></li>}
          <li>
            <button onClick={handleLogout} className="bg-red-500 px-4 py-2 rounded">
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
