// import React from 'react';
// import AdminNavbar from '../AdminNavbar';

// interface DemoRequest {
//   id: number;
//   name: string;
//   email: string;
//   phone: string;
//   company: string;
//   message: string;
// }

// interface ViewDemoRequestProps {
//   request: DemoRequest | null;
//   onClose: () => void;
// }

// const ViewDemoRequest: React.FC<ViewDemoRequestProps> = ({ request, onClose }) => {
//   if (!request) return null;

//   return (
//     <div className="min-h-screen bg-gray-50">
//         <AdminNavbar />
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50 mt-20">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] md:w-[400px] max-h-[90vh] overflow-y-auto">
//         <h2 className="text-xl font-semibold text-blue-700 mb-4 text-center">Demo Request Details</h2>

//         <div className="mb-2">
//           <strong>Name:</strong> {request.name}
//         </div>
//         <div className="mb-2">
//           <strong>Email:</strong> {request.email}
//         </div>
//         <div className="mb-2">
//           <strong>Phone:</strong> {request.phone}
//         </div>
//         <div className="mb-2">
//           <strong>Company:</strong> {request.company}
//         </div>
//         <div className="mb-2">
//           <strong>Message:</strong> {request.message || 'N/A'}
//         </div>

//         <div className="flex justify-center">
//           <button
//             onClick={onClose}
//             className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
//           >
//             Close
//           </button>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default ViewDemoRequest;
