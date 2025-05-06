import React, { useEffect, useState } from 'react';

const RegistrationsList = () => {
  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {
    const fetchRegistrations = async () => {
      try {
        const response = await fetch('http://localhost:5000/get-registrations');
        const data = await response.json();
        setRegistrations(data);
      } catch (error) {
        console.error('Error fetching registrations:', error);
      }
    };

    fetchRegistrations();
  }, []);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Registered Users</h2>
      <table className="min-w-full border border-gray-300 text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Role</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Phone</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Pincode</th>
            <th className="border px-4 py-2">Consent</th>
          </tr>
        </thead>
        <tbody>
          {registrations.map((reg) => (
            <tr key={reg.id}>
              <td className="border px-4 py-1 text-center">{reg.id}</td>
              <td className="border px-4 py-1">{reg.role}</td>
              <td className="border px-4 py-1">{reg.name}</td>
              <td className="border px-4 py-1">{reg.phone}</td>
              <td className="border px-4 py-1">{reg.email}</td>
              <td className="border px-4 py-1">{reg.pincode}</td>
              <td className="border px-4 py-1 text-center">{reg.consent ? '✅' : '❌'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RegistrationsList;
