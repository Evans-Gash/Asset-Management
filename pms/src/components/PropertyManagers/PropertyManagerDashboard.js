// src/components/PropertyManagers/PropertyManagerDashboard.jsx
import React from 'react';

const PropertyManagerDashboard = () => {
  return (
    <div className="container mx-auto my-10">
      <h2 className="text-3xl font-bold mb-6">Property Manager Dashboard</h2>
      <div className="grid grid-cols-2 gap-4">
        {/* Manage Properties */}
        <div className="p-4 bg-white shadow rounded">
          <h3 className="text-xl font-semibold">Manage Properties</h3>
          <p className="mt-2 text-gray-600">Oversee multiple properties and track tenant issues.</p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
            View Properties
          </button>
        </div>

        {/* Tenant Communication */}
        <div className="p-4 bg-white shadow rounded">
          <h3 className="text-xl font-semibold">Tenant Communication</h3>
          <p className="mt-2 text-gray-600">Manage tenant communications and maintenance requests.</p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
            View Requests
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyManagerDashboard;
