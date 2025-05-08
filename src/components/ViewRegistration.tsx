// import React from 'react';

// const ViewRegistration = ({ registration, onClose }) => {
//   if (!registration) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-96">
//         <h2 className="text-xl font-semibold text-blue-700 mb-4">Registration Details</h2>
//         <div className="mb-4">
//           <strong>Name:</strong> {registration.name}
//         </div>
//         <div className="mb-4">
//           <strong>Email:</strong> {registration.email}
//         </div>
//         <div className="mb-4">
//           <strong>Phone:</strong> {registration.phone}
//         </div>
//         <div className="mb-4">
//           <strong>Role:</strong> {registration.role}
//         </div>
//         <div className="mb-4">
//           <strong>Pincode:</strong> {registration.pincode}
//         </div>
//         <button onClick={onClose} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
//           Close
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ViewRegistration;


import React from 'react';

const ViewRegistration = ({ registration, onClose }) => {
  if (!registration) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 max-h-[90vh] overflow-y-auto">
        <h2 className="text-xl font-semibold text-blue-700 mb-4">Registration Details</h2>
        
        <div className="mb-2">
          <strong>Name:</strong> {registration.name}
        </div>
        <div className="mb-2">
          <strong>Email:</strong> {registration.email}
        </div>
        <div className="mb-2">
          <strong>Phone:</strong> {registration.phone}
        </div>
        <div className="mb-2">
          <strong>Role:</strong> {registration.role}
        </div>
        <div className="mb-2">
          <strong>Pincode:</strong> {registration.pincode}
        </div>        
        <div className="mb-2">
  <strong>Business Type:</strong> {registration.business_type || 'N/A'}
</div>


        <button onClick={onClose} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
          Close
        </button>
      </div>
    </div>
  );
};

export default ViewRegistration;
