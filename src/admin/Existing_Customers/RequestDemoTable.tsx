import React, { useEffect, useState } from 'react';
import { EyeIcon, PencilIcon, TrashIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import AdminNavbar from '../AdminNavbar';
import baseURL from '@/Api';

interface DemoRequest {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

const RequestDemoTable: React.FC = () => {
  const [requests, setRequests] = useState<DemoRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRequest, setSelectedRequest] = useState<DemoRequest | null>(null);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const res = await fetch(`${baseURL}/get-requests`);
        const data = await res.json();
        setRequests(data);
      } catch (err) {
        console.error('Error fetching requests:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchRequests();
  }, []);

  const handleDelete = async (id: number) => {
  if (window.confirm('Are you sure you want to delete this request?')) {
    try {
      const response = await fetch(`${baseURL}/delete-request/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setRequests((prev) => prev.filter((r) => r.id !== id));
        alert('Request deleted successfully.');
      } else {
        alert('Failed to delete the request. Please try again.');
      }
    } catch (err) {
      console.error('Delete error:', err);
      alert('An error occurred. Please try again.');
    }
  }
};


  const filtered = requests.filter((req) =>
    [req.name, req.email, req.phone, req.company, req.message]
      .join(' ')
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const indexOfLast = currentPage * recordsPerPage;
  const indexOfFirst = indexOfLast - recordsPerPage;
  const currentData = filtered.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filtered.length / recordsPerPage);

  if (loading) return <p className="text-sm">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-50">
        <AdminNavbar />
    <div className="p-4 relative mt-20">
      <h2 className="text-xl font-bold mb-4 text-center text-blue-700">📩 Demo Requests</h2>

      {/* Search & Records Controls */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-4 gap-2">
        <div className="flex items-center gap-2">
          <label htmlFor="recordsPerPage" className="text-sm">Show</label>
          <select
            id="recordsPerPage"
            value={recordsPerPage}
            onChange={(e) => {
              setRecordsPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
            className="border border-gray-300 rounded px-2 py-1 text-sm"
          >
            {[5, 10, 20, 50].map((num) => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
          <span className="text-sm">entries</span>
        </div>
        <div className="w-full md:w-auto ml-auto">
          <input
            type="text"
            placeholder="Search by name, email, phone, company..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            className="border border-gray-300 rounded px-4 py-2 shadow-sm w-full md:w-72"
          />
        </div>
      </div>

      {/* Table */}
      <div className="rounded-lg shadow bg-white overflow-auto">
        <table className="w-full text-sm text-gray-800 divide-y divide-gray-200">
          <thead className="bg-gradient-to-r from-blue-100 to-blue-200 text-gray-900 font-semibold">
            <tr>
              <th className="px-4 py-3 text-left">SNO</th>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Email</th>
              <th className="px-4 py-3 text-left">Phone</th>
              <th className="px-4 py-3 text-left">Company</th>
              <th className="px-4 py-3 text-left">Message</th>
              <th className="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {currentData.map((req, index) => (
              <tr key={req.id} className="hover:bg-blue-50 transition">
                <td className="px-4 py-2">{(currentPage - 1) * recordsPerPage + index + 1}</td>
                <td className="px-4 py-2">{req.name}</td>
                <td className="px-4 py-2">{req.email}</td>
                <td className="px-4 py-2">{req.phone}</td>
                <td className="px-4 py-2">{req.company}</td>
                <td className="px-4 py-2">{req.message}</td>
                <td className="px-4 py-2 flex justify-center gap-2">
                  <button title="View" onClick={() => setSelectedRequest(req)}>
                    <EyeIcon className="h-5 w-5 text-blue-600 hover:scale-110 transition" />
                  </button>
                  <button title="Edit">
  <Link to={`/edit-request/${req.id}`}>
    <PencilIcon className="h-5 w-5 text-green-600 hover:scale-110 transition" />
  </Link>
</button>

                  <button title="Delete" onClick={() => handleDelete(req.id)}>
                    <TrashIcon className="h-5 w-5 text-red-600 hover:scale-110 transition" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-4 py-2 rounded-full border font-medium transition ${
              currentPage === i + 1
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-white text-blue-600 border-blue-400 hover:bg-blue-50'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {/* View Modal */}
      {selectedRequest && (
        <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-[90%] max-w-md shadow-lg relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
              onClick={() => setSelectedRequest(null)}
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
            <h3 className="text-lg font-semibold text-blue-700 mb-4">Demo Request Details</h3>
            <div className="space-y-2 text-sm">
              <p><strong>Name:</strong> {selectedRequest.name}</p>
              <p><strong>Email:</strong> {selectedRequest.email}</p>
              <p><strong>Phone:</strong> {selectedRequest.phone}</p>
              <p><strong>Company:</strong> {selectedRequest.company}</p>
              <p><strong>Message:</strong> {selectedRequest.message}</p>
            </div>
            <div className="mt-4 text-right">
              <button
                onClick={() => setSelectedRequest(null)}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>

    </div>
  );
};

export default RequestDemoTable;
