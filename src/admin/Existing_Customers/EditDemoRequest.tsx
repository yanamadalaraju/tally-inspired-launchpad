import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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

const EditDemoRequest: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [formData, setFormData] = useState<DemoRequest>({
    id: 0,
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRequest = async () => {
      try {
        const res = await fetch(`${baseURL}/get-request/${id}`);
        const data = await res.json();
        setFormData(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching request:', err);
        setLoading(false);
      }
    };

    if (id) fetchRequest();
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(`${baseURL}/update-request/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        navigate('/requestdemotable');
      } else {
        alert(data.message || 'Failed to update request');
      }
    } catch (err) {
      console.error('Error updating request:', err);
      alert('Error updating request');
    }
  };

  if (loading) return <p className="text-center mt-10 text-gray-600">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-50">
        <AdminNavbar />
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50 mt-20">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] md:w-[400px] max-h-[90vh] overflow-y-auto">
        <h2 className="text-xl font-semibold text-blue-700 mb-4 text-center">Edit Demo Request</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
  <div>
    <label className="block text-sm text-gray-700">Name</label>
    <input
      type="text"
      name="name"
      value={formData.name}
      onChange={handleChange}
      required
      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
  <div>
    <label className="block text-sm text-gray-700">Email</label>
    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      required
      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
  <div>
    <label className="block text-sm text-gray-700">Phone</label>
    <input
      type="text"
      name="phone"
      value={formData.phone}
      onChange={handleChange}
      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
  <div>
    <label className="block text-sm text-gray-700">Company</label>
    <input
      type="text"
      name="company"
      value={formData.company}
      onChange={handleChange}
      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
  <div className="md:col-span-2">
    <label className="block text-sm text-gray-700">Message</label>
    <textarea
      name="message"
      value={formData.message}
      onChange={handleChange}
      rows={3}
      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>

  <div className="md:col-span-2 flex justify-between pt-2">
    <button
      type="button"
      onClick={() => navigate('/requestdemotable')}
      className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded text-sm"
    >
      Cancel
    </button>
    <button
      type="submit"
      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm"
    >
      Save Changes
    </button>
  </div>
</form>

      </div>
    </div>

    </div>
  );
};

export default EditDemoRequest;
