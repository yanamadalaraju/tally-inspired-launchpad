// import React, { useEffect, useState } from 'react';
// import { PencilIcon, EyeIcon, TrashIcon } from '@heroicons/react/24/solid';
// import ViewRegistration from '../components/ViewRegistration';
// import EditRegistration from '@/components/EditRegistration';
// import deleteRegistration from '../components/deleteRegistration'; // ✅ import the delete function
// import AdminNavbar from '@/admin/AdminNavbar';

// const RegistrationsList = () => {
//   const [registrations, setRegistrations] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [recordsPerPage, setRecordsPerPage] = useState(10);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [sortConfig, setSortConfig] = useState({ key: '', direction: 'asc' });
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [modalType, setModalType] = useState('');
//   const [selectedRegistration, setSelectedRegistration] = useState(null);

//   useEffect(() => {
//     const fetchRegistrations = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/get-registrations');
//         const data = await response.json();
//         setRegistrations(data);
//       } catch (error) {
//         console.error('Error fetching registrations:', error);
//       }
//     };
//     fetchRegistrations();
//   }, []);

//   const handleDelete = async (id) => {
//     const confirm = window.confirm('Are you sure you want to delete this registration?');
//     if (!confirm) return;

//     const result = await deleteRegistration(id);
//     if (result.success) {
//       setRegistrations((prev) => prev.filter((reg) => reg.id !== id));
//       alert('Registration deleted successfully!');
//     } else {
//       alert(result.message || 'Failed to delete registration.');
//     }
//   };

//   const handleEdit = (updatedRegistration) => {
//     setRegistrations((prev) =>
//       prev.map((reg) => (reg.id === updatedRegistration.id ? updatedRegistration : reg))
//     );
//   };

//   const openModal = (registration, type) => {
//     setSelectedRegistration(registration);
//     setModalType(type);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedRegistration(null);
//     setModalType('');
//   };

//   const handleSort = (key) => {
//     let direction = 'asc';
//     if (sortConfig.key === key && sortConfig.direction === 'asc') {
//       direction = 'desc';
//     }
//     setSortConfig({ key, direction });
//   };

//   const filteredRegistrations = registrations.filter((reg) =>
//     [reg.name, reg.email, reg.role].join(' ').toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const sortedRegistrations = [...filteredRegistrations].sort((a, b) => {
//     const { key, direction } = sortConfig;
//     if (!key) return 0;
//     const aVal = a[key]?.toString().toLowerCase();
//     const bVal = b[key]?.toString().toLowerCase();
//     if (aVal < bVal) return direction === 'asc' ? -1 : 1;
//     if (aVal > bVal) return direction === 'asc' ? 1 : -1;
//     return 0;
//   });

//   const indexOfLast = currentPage * recordsPerPage;
//   const indexOfFirst = indexOfLast - recordsPerPage;
//   const currentRegs = sortedRegistrations.slice(indexOfFirst, indexOfLast);
//   const totalPages = Math.ceil(sortedRegistrations.length / recordsPerPage);

//   return (
//     <>
//     <AdminNavbar />
//     <div className="p-6 max-w-6xl mx-auto pt-20">
//       <h2 className="text-3xl font-semibold mb-6 text-center text-blue-700">📋 Registered Users</h2>

//       {/* Search */}
//       <div className="mb-4 flex justify-end">
//         <input
//           type="text"
//           placeholder="Search by name, email, or role..."
//           value={searchTerm}
//           onChange={(e) => {
//             setSearchTerm(e.target.value);
//             setCurrentPage(1);
//           }}
//           className="border border-gray-300 rounded px-4 py-2 shadow-sm w-72 focus:outline-none focus:ring-2 focus:ring-blue-400"
//         />
//       </div>

//       {/* Table */}
//       <div className="overflow-x-auto rounded-lg shadow-lg bg-white">
//         <table className="min-w-full divide-y divide-gray-200 text-sm text-gray-800">
//           <thead className="bg-gradient-to-r from-blue-100 to-blue-200 text-gray-900 font-semibold text-left">
//             <tr>
//               <th className="px-6 py-3 cursor-pointer" onClick={() => handleSort('id')}>SNO</th>
//               <th className="px-6 py-3 cursor-pointer" onClick={() => handleSort('role')}>Role</th>
//               <th className="px-6 py-3 cursor-pointer" onClick={() => handleSort('name')}>Name</th>
//               <th className="px-6 py-3 cursor-pointer" onClick={() => handleSort('phone')}>Phone</th>
//               <th className="px-6 py-3 cursor-pointer" onClick={() => handleSort('email')}>Email</th>
//               <th className="px-6 py-3 cursor-pointer" onClick={() => handleSort('pincode')}>Pincode</th>
//               <th className="px-6 py-3">Actions</th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-200">
//             {currentRegs.map((reg) => (
//               <tr key={reg.id} className="hover:bg-blue-50 transition">
//                 <td className="px-6 py-2 text-center">{reg.id}</td>
//                 <td className="px-6 py-2 capitalize">{reg.role}</td>
//                 <td className="px-6 py-2">{reg.name}</td>
//                 <td className="px-6 py-2">{reg.phone}</td>
//                 <td className="px-6 py-2">{reg.email}</td>
//                 <td className="px-6 py-2">{reg.pincode}</td>
//                 <td className="px-6 py-2 flex space-x-2">
//                   <button title="View" onClick={() => openModal(reg, 'view')}>
//                     <EyeIcon className="h-5 w-5 text-blue-600 hover:scale-110 transition" />
//                   </button>
//                   <button title="Edit" onClick={() => openModal(reg, 'edit')}>
//                     <PencilIcon className="h-5 w-5 text-green-600 hover:scale-110 transition" />
//                   </button>
//                   <button title="Delete" onClick={() => handleDelete(reg.id)}>
//                     <TrashIcon className="h-5 w-5 text-red-600 hover:scale-110 transition" />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination */}
//       <div className="flex flex-col md:flex-row justify-between items-center mt-6 gap-4">
//         <div className="flex flex-wrap justify-center gap-2">
//           {Array.from({ length: totalPages }, (_, i) => (
//             <button
//               key={i + 1}
//               onClick={() => setCurrentPage(i + 1)}
//               className={`px-4 py-2 rounded-full border font-medium transition duration-200 ${
//                 currentPage === i + 1
//                   ? 'bg-blue-600 text-white shadow-md'
//                   : 'bg-white text-blue-600 border-blue-400 hover:bg-blue-50'
//               }`}
//             >
//               {i + 1}
//             </button>
//           ))}
//         </div>

//         {/* Records Per Page */}
//         <div className="flex items-center space-x-2">
//           <label htmlFor="recordsPerPage" className="text-sm font-medium text-gray-700">
//             Records per page:
//           </label>
//           <select
//             id="recordsPerPage"
//             value={recordsPerPage}
//             onChange={(e) => {
//               setRecordsPerPage(Number(e.target.value));
//               setCurrentPage(1);
//             }}
//             className="border border-gray-300 rounded px-3 py-1 text-sm"
//           >
//             {[5, 10, 20, 50, 100].map((num) => (
//               <option key={num} value={num}>{num}</option>
//             ))}
//           </select>
//         </div>
//       </div>

//       {/* View & Edit Modal */}
//       {isModalOpen && selectedRegistration && modalType === 'view' && (
//         <ViewRegistration registration={selectedRegistration} onClose={closeModal} />
//       )}
//       {isModalOpen && selectedRegistration && modalType === 'edit' && (
//         <EditRegistration
//           registration={selectedRegistration}
//           onClose={closeModal}
//           onUpdate={handleEdit}
//         />
//       )}
//     </div>
//     </>
//   );
// };

// export default RegistrationsList;


import React, { useEffect, useState } from 'react';
import { PencilIcon, EyeIcon, TrashIcon } from '@heroicons/react/24/solid';
import ViewRegistration from '../components/ViewRegistration';
import EditRegistration from '@/components/EditRegistration';
import deleteRegistration from '../components/deleteRegistration';
import AdminNavbar from '@/admin/AdminNavbar';

const RegistrationsList = () => {
  const [registrations, setRegistrations] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: '', direction: 'asc' });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('');
  const [selectedRegistration, setSelectedRegistration] = useState(null);

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

  const handleDelete = async (id) => {
    const confirm = window.confirm('Are you sure you want to delete this registration?');
    if (!confirm) return;

    const result = await deleteRegistration(id);
    if (result.success) {
      setRegistrations((prev) => prev.filter((reg) => reg.id !== id));
      alert('Registration deleted successfully!');
    } else {
      alert(result.message || 'Failed to delete registration.');
    }
  };

  const handleEdit = (updatedRegistration) => {
    setRegistrations((prev) =>
      prev.map((reg) => (reg.id === updatedRegistration.id ? updatedRegistration : reg))
    );
  };

  const openModal = (registration, type) => {
    setSelectedRegistration(registration);
    setModalType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRegistration(null);
    setModalType('');
  };

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const filteredRegistrations = registrations.filter((reg) =>
    [reg.name, reg.email, reg.role, reg.business_type].join(' ').toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedRegistrations = [...filteredRegistrations].sort((a, b) => {
    const { key, direction } = sortConfig;
    if (!key) return 0;
    const aVal = a[key]?.toString().toLowerCase();
    const bVal = b[key]?.toString().toLowerCase();
    if (aVal < bVal) return direction === 'asc' ? -1 : 1;
    if (aVal > bVal) return direction === 'asc' ? 1 : -1;
    return 0;
  });

  const indexOfLast = currentPage * recordsPerPage;
  const indexOfFirst = indexOfLast - recordsPerPage;
  const currentRegs = sortedRegistrations.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(sortedRegistrations.length / recordsPerPage);

  return (
    <>
      <AdminNavbar />
      <div className="p-6 max-w-6xl mx-auto pt-20">
        <h2 className="text-3xl font-semibold mb-6 text-center text-blue-700">📋 Registered Users</h2>

        {/* Search */}
        <div className="mb-4 flex justify-end">
          <input
            type="text"
            placeholder="Search by name, email, role or business..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            className="border border-gray-300 rounded px-4 py-2 shadow-sm w-72 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-lg shadow-lg bg-white">
          <table className="min-w-full divide-y divide-gray-200 text-sm text-gray-800">
            <thead className="bg-gradient-to-r from-blue-100 to-blue-200 text-gray-900 font-semibold text-left">
              <tr>
                <th className="px-6 py-3 cursor-pointer" onClick={() => handleSort('id')}>SNO</th>
                <th className="px-6 py-3 cursor-pointer" onClick={() => handleSort('role')}>Role</th>
                <th className="px-6 py-3 cursor-pointer" onClick={() => handleSort('name')}>Name</th>
                <th className="px-6 py-3 cursor-pointer" onClick={() => handleSort('phone')}>Phone</th>
                <th className="px-6 py-3 cursor-pointer" onClick={() => handleSort('email')}>Email</th>
                <th className="px-6 py-3 cursor-pointer" onClick={() => handleSort('pincode')}>Pincode</th>
                <th className="px-6 py-3 cursor-pointer" onClick={() => handleSort('business_type')}>Business Type</th>
                <th className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {currentRegs.map((reg) => (
                <tr key={reg.id} className="hover:bg-blue-50 transition">
                  <td className="px-6 py-2 text-center">{reg.id}</td>
                  <td className="px-6 py-2 capitalize">{reg.role}</td>
                  <td className="px-6 py-2">{reg.name}</td>
                  <td className="px-6 py-2">{reg.phone}</td>
                  <td className="px-6 py-2">{reg.email}</td>
                  <td className="px-6 py-2">{reg.pincode}</td>
                  <td className="px-6 py-2 capitalize">{reg.business_type || 'N/A'}</td>
                  <td className="px-6 py-2 flex space-x-2">
                    <button title="View" onClick={() => openModal(reg, 'view')}>
                      <EyeIcon className="h-5 w-5 text-blue-600 hover:scale-110 transition" />
                    </button>
                    <button title="Edit" onClick={() => openModal(reg, 'edit')}>
                      <PencilIcon className="h-5 w-5 text-green-600 hover:scale-110 transition" />
                    </button>
                    <button title="Delete" onClick={() => handleDelete(reg.id)}>
                      <TrashIcon className="h-5 w-5 text-red-600 hover:scale-110 transition" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6 gap-4">
          <div className="flex flex-wrap justify-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-4 py-2 rounded-full border font-medium transition duration-200 ${
                  currentPage === i + 1
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white text-blue-600 border-blue-400 hover:bg-blue-50'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <label htmlFor="recordsPerPage" className="text-sm font-medium text-gray-700">
              Records per page:
            </label>
            <select
              id="recordsPerPage"
              value={recordsPerPage}
              onChange={(e) => {
                setRecordsPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="border border-gray-300 rounded px-3 py-1 text-sm"
            >
              {[5, 10, 20, 50, 100].map((num) => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Modals */}
        {isModalOpen && selectedRegistration && modalType === 'view' && (
          <ViewRegistration registration={selectedRegistration} onClose={closeModal} />
        )}
        {isModalOpen && selectedRegistration && modalType === 'edit' && (
          <EditRegistration
            registration={selectedRegistration}
            onClose={closeModal}
            onUpdate={handleEdit}
          />
        )}
      </div>
    </>
  );
};

export default RegistrationsList;
