// src/components/Landlords/Dashboard.jsx
import React from 'react';

const LandlordDashboard = () => {
  return (
    <div className="container mx-auto my-10">
      <h2 className="text-3xl font-bold mb-6">Landlord Dashboard</h2>
      <div className="grid grid-cols-2 gap-4">
        {/* Rent Collection Overview */}
        <div className="p-4 bg-white shadow rounded">
          <h3 className="text-xl font-semibold">Rent Collection</h3>
          <p className="mt-2 text-gray-600">Track all rent payments from tenants.</p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
            View Payments
          </button>
        </div>

        {/* Manage Tenants */}
        <div className="p-4 bg-white shadow rounded">
          <h3 className="text-xl font-semibold">Manage Tenants</h3>
          <p className="mt-2 text-gray-600">View and manage tenants across properties.</p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
            View Tenants
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandlordDashboard;
