// import AdminNavbar from "./AdminNavbar";

// const Dashboard = () => {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <AdminNavbar />

//       {/* Main Content with mt-20 for navbar spacing */}
//       <main className="px-4 py-6 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-20">
//         {/* Welcome Header */}
//         <div className="pt-6 pb-8 text-center">
//           <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
//             Welcome Admin <span className="text-blue-600">👋</span>
//           </h1>
//           <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
//             You are now logged in. Let's manage the system efficiently.
//           </p>
//         </div>

//         {/* Stats Card: Total Members */}
//         {/* Stats Cards */}
// {/* Compact Stats Cards */}
// <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
//   {/* Total Members */}
//   <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-3 hover:shadow-md transition-shadow">
//     <div className="flex items-center space-x-3">
//       <div className="h-10 w-10 rounded-md bg-blue-50 flex items-center justify-center">
//         <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
//         </svg>
//       </div>
//       <div className="flex-1">
//         <p className="text-sm text-gray-500 font-medium">Total Members</p>
//         <p className="text-lg font-semibold text-gray-900">150</p>
//       </div>
//     </div>
//   </div>

//   {/* Total Webinars */}
//   <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-3 hover:shadow-md transition-shadow">
//     <div className="flex items-center space-x-3">
//       <div className="h-10 w-10 rounded-md bg-purple-50 flex items-center justify-center">
//         <svg className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10m2 8a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2h14z" />
//         </svg>
//       </div>
//       <div className="flex-1">
//         <p className="text-sm text-gray-500 font-medium">Total Webinars</p>
//         <p className="text-lg font-semibold text-gray-900">25</p>
//       </div>
//     </div>
//   </div>
// </div>


//       </main>
//     </div>
//   );
// };

// export default Dashboard;

// import { useEffect, useState } from "react";
// import axios from "axios";
// import AdminNavbar from "./AdminNavbar";

// const baseURL = "http://localhost:5000";

// const Dashboard = () => {
//   const [registrations, setRegistrations] = useState([]);
//   const [webinars, setWebinars] = useState([]);
//   const [webinarStats, setWebinarStats] = useState([]);

//   useEffect(() => {
//     const fetchRegistrations = async () => {
//       try {
//         const response = await fetch(`${baseURL}/get-registrations`);
//         const data = await response.json();
//         setRegistrations(data);
//       } catch (error) {
//         console.error("Error fetching registrations:", error);
//       }
//     };

//     const fetchWebinars = async () => {
//       try {
//         const response = await axios.get(`${baseURL}/webinars`);
//         const formattedData = response.data.map((w) => ({
//           ...w,
//           takeaways: JSON.parse(w.takeaways || "[]"),
//         }));
//         setWebinars(formattedData);
//       } catch (error) {
//         console.error("Error fetching webinars:", error);
//       }
//     };

//     fetchRegistrations();
//     fetchWebinars();
//   }, []);

//   // Calculate members per webinar
//   useEffect(() => {
//     if (registrations.length && webinars.length) {
//       const stats = webinars.map((webinar) => {
//         const count = registrations.filter(
//           (reg) => reg.webinarId === webinar.id || reg.webinar_id === webinar.id
//         ).length;
//         return {
//           title: webinar.title,
//           count,
//         };
//       });
//       setWebinarStats(stats);
//     }
//   }, [registrations, webinars]);

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <AdminNavbar />

//       <main className="px-4 py-6 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-20">
//         <div className="pt-6 pb-8 text-center">
//           <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
//             Welcome Admin <span className="text-blue-600">👋</span>
//           </h1>
//           <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
//             You are now logged in. Let's manage the system efficiently.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
//           {/* Total Members */}
//           <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-3 hover:shadow-md transition-shadow">
//             <div className="flex items-center space-x-3">
//               <div className="h-10 w-10 rounded-md bg-blue-50 flex items-center justify-center">
//                 <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
//                 </svg>
//               </div>
//               <div className="flex-1">
//                 <p className="text-sm text-gray-500 font-medium">Total Members</p>
//                 <p className="text-lg font-semibold text-gray-900">{registrations.length}</p>
//               </div>
//             </div>
//           </div>

//           {/* Total Webinars */}
//           <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-3 hover:shadow-md transition-shadow">
//             <div className="flex items-center space-x-3">
//               <div className="h-10 w-10 rounded-md bg-purple-50 flex items-center justify-center">
//                 <svg className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10m2 8a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2h14z" />
//                 </svg>
//               </div>
//               <div className="flex-1">
//                 <p className="text-sm text-gray-500 font-medium">Total Webinars</p>
//                 <p className="text-lg font-semibold text-gray-900">{webinars.length}</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Webinar Registration Stats */}
//         {webinarStats.length > 0 && (
//           <div className="mt-10">
//             <h2 className="text-xl font-semibold mb-4 text-gray-800">Registrations per Webinar</h2>
//             <ul className="space-y-3">
//               {webinarStats.map((item, index) => (
//                 <li key={index} className="bg-white shadow-sm border border-gray-100 rounded-lg p-4">
//                   <div className="flex justify-between items-center">
//                     <span className="text-gray-700 font-medium">{item.title}</span>
//                     <span className="text-sm text-gray-500">{item.count} members registered</span>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </main>
//     </div>
//   );
// };

// export default Dashboard;

// each registered member details

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// // Define the shape of each registration record
// interface Registration {
//   id: number;
//   name: string;
//   email: string;
//   phone: string;
//   pincode: string;
//   role: string;
//   business_type: string;
//   webinar_id: string;
// }

// const Dashboard: React.FC = () => {
//   const [registrations, setRegistrations] = useState<Registration[]>([]);
//   const [groupedRegistrations, setGroupedRegistrations] = useState<Record<string, Registration[]>>({});

//   useEffect(() => {
//     const fetchRegistrations = async () => {
//       try {
//         const response = await axios.get<Registration[]>('http://localhost:5000/get-registrations'); // adjust URL if needed
//         const data = response.data;

//         // Group registrations by webinar_id
//         const grouped: Record<string, Registration[]> = {};
//         data.forEach((reg) => {
//           if (!grouped[reg.webinar_id]) {
//             grouped[reg.webinar_id] = [];
//           }
//           grouped[reg.webinar_id].push(reg);
//         });

//         setRegistrations(data);
//         setGroupedRegistrations(grouped);
//       } catch (error) {
//         console.error('Error fetching registrations:', error);
//       }
//     };

//     fetchRegistrations();
//   }, []);

//   return (
//     <div className="p-8 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-bold mb-8 text-center text-blue-700">📋 Webinar Registrations</h1>

//       {Object.entries(groupedRegistrations).map(([webinarId, members]) => {
//         const typedMembers = members as Registration[];

//         return (
//           <div key={webinarId} className="mb-10 bg-white shadow-lg rounded-xl p-6 border border-blue-200">
//             <h2 className="text-xl font-semibold text-blue-600 mb-4">
//               🎯 Webinar ID: {webinarId}
//             </h2>
//             <ul className="space-y-4">
//               {typedMembers.map((reg, index) => (
//                 <li key={index} className="bg-gray-50 p-4 rounded-md shadow-sm border border-gray-300">
//                   <p><strong>Name:</strong> {reg.name}</p>
//                   <p><strong>Email:</strong> {reg.email}</p>
//                   <p><strong>Phone:</strong> {reg.phone}</p>
//                   <p><strong>Role:</strong> {reg.role}</p>
//                   <p><strong>Pincode:</strong> {reg.pincode}</p>
//                   <p><strong>Business Type:</strong> {reg.business_type}</p>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Dashboard;

import { useEffect, useState } from "react";
import axios from "axios";
import AdminNavbar from "./AdminNavbar";

const baseURL = "http://localhost:5000";

const Dashboard = () => {
  const [registrations, setRegistrations] = useState([]);
  const [webinars, setWebinars] = useState([]);
  const [webinarStats, setWebinarStats] = useState([]);

  useEffect(() => {
    const fetchRegistrations = async () => {
      try {
        const response = await fetch(`${baseURL}/get-registrations`);
        const data = await response.json();
        setRegistrations(data);
      } catch (error) {
        console.error("Error fetching registrations:", error);
      }
    };

    const fetchWebinars = async () => {
      try {
        const response = await axios.get(`${baseURL}/webinars`);
        const formattedData = response.data.map((w) => ({
          ...w,
          takeaways: JSON.parse(w.takeaways || "[]"),
        }));
        setWebinars(formattedData);
      } catch (error) {
        console.error("Error fetching webinars:", error);
      }
    };

    fetchRegistrations();
    fetchWebinars();
  }, []);

  // Calculate members per webinar
  useEffect(() => {
  if (registrations.length && webinars.length) {
    const stats = webinars.map((webinar) => {
      const count = registrations.filter(
        (reg) => Number(reg.webinar_id) === Number(webinar.id)
      ).length;

      return {
        title: webinar.title,
        count,
      };
    });

    setWebinarStats(stats);
  }
}, [registrations, webinars]);


  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNavbar />

      <main className="px-4 py-6 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-20">
        <div className="pt-6 pb-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Welcome Admin <span className="text-blue-600">👋</span>
          </h1>
          <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
            You are now logged in. Let's manage the system efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {/* Total Members */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-3 hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-md bg-blue-50 flex items-center justify-center">
                <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-500 font-medium">Total Members</p>
                <p className="text-lg font-semibold text-gray-900">{registrations.length}</p>
              </div>
            </div>
          </div>

          {/* Total Webinars */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-3 hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-md bg-purple-50 flex items-center justify-center">
                <svg className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10m2 8a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2h14z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-500 font-medium">Total Webinars</p>
                <p className="text-lg font-semibold text-gray-900">{webinars.length}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Webinar Registration Stats */}
        {webinarStats.length > 0 && (
          <div className="mt-10">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">📊 Registrations per Webinar</h2>
            <ul className="space-y-3">
              {webinarStats.map((item, index) => (
                <li key={index} className="bg-white shadow-sm border border-gray-100 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">{item.title}</span>
                    <span className="text-sm text-gray-500">
                      {item.count > 0 ? `${item.count} members registered` : "0 members registered"}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;

