// src/components/Tenants/TenantDashboard.jsx
import React from 'react';

const TenantDashboard = () => {
  return (
    <div className="container mx-auto my-10">
      <h2 className="text-3xl font-bold mb-6">Tenant Dashboard</h2>
      <div className="grid grid-cols-2 gap-4">
        {/* Pay Rent */}
        <div className="p-4 bg-white shadow rounded">
          <h3 className="text-xl font-semibold">Pay Rent</h3>
          <p className="mt-2 text-gray-600">Check your rent status and make payments.</p>
          <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded">
            Pay Now
          </button>
        </div>

        {/* Maintenance Requests */}
        <div className="p-4 bg-white shadow rounded">
          <h3 className="text-xl font-semibold">Maintenance Requests</h3>
          <p className="mt-2 text-gray-600">Submit maintenance requests and track status.</p>
          <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded">
            Submit Request
          </button>
        </div>
      </div>
    </div>
  );
};

export default TenantDashboard;
