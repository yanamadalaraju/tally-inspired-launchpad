// import React, { useState } from 'react';
// import axios from 'axios';

// const AddWebinarForm = () => {
// const [newWebinar, setNewWebinar] = useState(null);

//   const [formData, setFormData] = useState({
//     title: '',
//     date: '',
//     duration: '',
//     presenters: '',
//     takeaways: [''],
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleTakeawayChange = (index, value) => {
//     const updated = [...formData.takeaways];
//     updated[index] = value;
//     setFormData(prev => ({ ...prev, takeaways: updated }));
//   };

//   const addTakeawayField = () => {
//     setFormData(prev => ({ ...prev, takeaways: [...prev.takeaways, ''] }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     const payload = {
//       ...formData,
//       takeaways: formData.takeaways.join('\n'),
//     };
  
//     try {
//       const response = await axios.post('http://localhost:5000/admin/add-webinar', payload);
//       setNewWebinar(response.data);  // Save the response
//       alert('✅ Webinar added successfully!');
//       setFormData({
//         title: '',
//         date: '',
//         duration: '',
//         presenters: '',
//         takeaways: [''],
//       });
//     } catch (error) {
//       console.error('Error adding webinar:', error);
//       alert('❌ Failed to add webinar.');
//     }
//   };
  

//   return (
//     <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
//       <h2 className="text-2xl font-bold mb-4 text-center text-primary">Add New Webinar</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="text"
//           name="title"
//           placeholder="Webinar Title"
//           value={formData.title}
//           onChange={handleChange}
//           required
//           className="w-full px-4 py-2 border rounded"
//         />

//         <input
//           type="date"
//           name="date"
//           value={formData.date}
//           onChange={handleChange}
//           required
//           className="w-full px-4 py-2 border rounded"
//         />

//         <input
//           type="text"
//           name="duration"
//           placeholder="Duration (e.g., 1 Hour)"
//           value={formData.duration}
//           onChange={handleChange}
//           required
//           className="w-full px-4 py-2 border rounded"
//         />

//         <input
//           type="text"
//           name="presenters"
//           placeholder="Presenters (e.g., John, Jane)"
//           value={formData.presenters}
//           onChange={handleChange}
//           required
//           className="w-full px-4 py-2 border rounded"
//         />

//         <div>
//           <label className="block font-medium mb-2">Key Takeaways</label>
//           {formData.takeaways.map((item, index) => (
//             <input
//               key={index}
//               type="text"
//               value={item}
//               onChange={(e) => handleTakeawayChange(index, e.target.value)}
//               placeholder={`Takeaway ${index + 1}`}
//               className="w-full px-4 py-2 mb-2 border rounded"
//               required
//             />
//           ))}
//           <button
//             type="button"
//             onClick={addTakeawayField}
//             className="text-blue-500 hover:underline text-sm"
//           >
//             + Add another takeaway
//           </button>
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
//         >
//           Submit Webinar
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddWebinarForm;

// src/pages/AddWebinarForm.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminNavbar from '@/admin/AdminNavbar';
import WebinarDetailsCard from './webinar/WebinarDetailsCard';
import baseURL from '@/Api';

const AddWebinarForm = () => {
  const [webinars, setWebinars] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    time: '',
    ampm: 'AM',
    duration: '',
    presenters: '',
    takeaways: [''],
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editingWebinarId, setEditingWebinarId] = useState(null); // Track which webinar is being edited

  useEffect(() => {
    const fetchWebinars = async () => {
      try {
        const response = await axios.get(`${baseURL}/webinars`);
        const formattedData = response.data.map((w) => ({
          ...w,
          takeaways: JSON.parse(w.takeaways || '[]'),
        }));
        setWebinars(formattedData);
      } catch (error) {
        console.error('Error fetching webinars:', error);
      }
    };

    fetchWebinars();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTakeawayChange = (index, value) => {
    const updated = [...formData.takeaways];
    updated[index] = value;
    setFormData((prev) => ({ ...prev, takeaways: updated }));
  };

  const addTakeawayField = () => {
    if (formData.takeaways.length < 3) {
      setFormData((prev) => ({ ...prev, takeaways: [...prev.takeaways, ''] }));
    } else {
      alert('❗ Maximum of 3 takeaways allowed.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      ...formData,
      title: formData.title.trim(),
      duration: formData.duration.trim(),
      presenters: formData.presenters.trim(),
      takeaways: formData.takeaways.map((t) => t.trim()).join('\n'),
      time: `${formData.time.trim()} ${formData.ampm}`, // combine time and AM/PM
    };

    try {
      if (isEditing) {
        // Update existing webinar
        const response = await axios.put(
          `${baseURL}/admin/edit-webinar/${editingWebinarId}`,
          payload
        );
        const updatedWebinar = {
          ...response.data,
          takeaways: response.data.takeaways?.split('\n') || [],
        };

        alert('✅ Webinar updated successfully!');
      } else {
        // Add new webinar
        const response = await axios.post(
          `${baseURL}/admin/add-webinar`,
          payload
        );
        const updatedWebinar = {
          ...response.data,
          takeaways: response.data.takeaways?.split('\n') || [],
        };

        alert('✅ Webinar added successfully!');
      }

      // Refetch webinars after adding or editing
      const refetch = await axios.get(`${baseURL}/webinars`);
      const formatted = refetch.data.map((w) => ({
        ...w,
        takeaways: JSON.parse(w.takeaways || '[]'),
      }));
      setWebinars(formatted);
      setIsEditing(false); // Reset editing state after submit
      setFormData({
        title: '',
        date: '',
        time: '',
        ampm: 'AM',
        duration: '',
        presenters: '',
        takeaways: [''],
      });
    } catch (error) {
      console.error('Error submitting webinar:', error);
      alert('❌ Failed to submit webinar.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEdit = (webinarId) => {
    const webinarToEdit = webinars.find((w) => w.id === webinarId);
    setEditingWebinarId(webinarId);
    setIsEditing(true);

    // Pre-fill the form with existing webinar data
    setFormData({
      title: webinarToEdit.title,
      date: webinarToEdit.date,
      time: webinarToEdit.time.split(' ')[0], // Extract time (HH:MM)
      ampm: webinarToEdit.time.split(' ')[1], // Extract AM/PM
      duration: webinarToEdit.duration,
      presenters: webinarToEdit.presenters,
      takeaways: webinarToEdit.takeaways || [''],
    });
  };

  return (
    <>
      <AdminNavbar />
      <div className="flex flex-col lg:flex-row max-w-6xl mx-auto mt-28 p-6 gap-6">
        {/* Form Section */}
        <div className="lg:w-1/2 bg-white p-4 rounded-lg shadow-lg border border-gray-200">
  <h2 className="text-lg font-semibold text-center text-blue-700 mb-2">
    {isEditing ? '✏️ Edit Webinar' : '➕ Add New Webinar'}
  </h2>

  <form onSubmit={handleSubmit} className="space-y-3 text-sm">
    <div>
      <label className="block text-base font-medium mb-1 text-gray-700">Webinar Title</label>
      <input
        type="text"
        name="title"
        placeholder="Webinar Title"
        value={formData.title}
        onChange={handleChange}
        required
        className="w-full px-2 py-1.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
      />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      <div>
        <label className="block text-base font-medium mb-1 text-gray-700">Date</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          className="w-full px-2 py-1.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />
      </div>

      <div className="flex gap-3">
        <div>
          <label className="block text-base font-medium mb-1 text-gray-700">Time</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="w-full px-2 py-1.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-base font-medium mb-1 text-gray-700">AM/PM</label>
          <select
            name="ampm"
            value={formData.ampm || 'AM'}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, ampm: e.target.value }))
            }
            className="w-full px-2 py-1.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          >
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-base font-medium mb-1 text-gray-700">Duration</label>
        <input
          type="text"
          name="duration"
          placeholder="Duration (e.g., 1 Hour)"
          value={formData.duration}
          onChange={handleChange}
          required
          className="w-full px-2 py-1.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />
      </div>

      <div>
        <label className="block text-base font-medium mb-1 text-gray-700">Presenters</label>
        <input
          type="text"
          name="presenters"
          placeholder="Presenters (e.g., John, Jane)"
          value={formData.presenters}
          onChange={handleChange}
          required
          className="w-full px-2 py-1.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />
      </div>
    </div>

    <div>
      <label className="block text-base font-medium mb-1 text-gray-700">🎯 Key Takeaways</label>
      {formData.takeaways.map((item, index) => (
        <input
          key={index}
          type="text"
          value={item}
          onChange={(e) => handleTakeawayChange(index, e.target.value)}
          placeholder={`Takeaway ${index + 1}`}
          className="w-full px-2 py-1.5 mb-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          required
        />
      ))}
      {formData.takeaways.length < 3 && (
        <button
          type="button"
          onClick={addTakeawayField}
          className="text-sm text-blue-600 hover:text-blue-800 mt-1"
        >
          ➕ Add another takeaway
        </button>
      )}
    </div>

    <button
      type="submit"
      disabled={isSubmitting}
      className={`w-full py-2 text-sm text-white font-medium rounded-md transition ${
        isSubmitting
          ? 'bg-blue-300 cursor-not-allowed'
          : 'bg-blue-600 hover:bg-blue-700'
      }`}
    >
      {isSubmitting ? 'Submitting...' : isEditing ? '✏️ Update Webinar' : '📤 Submit Webinar'}
    </button>
  </form>
</div>



        {/* Webinar Details Section */}
        <div className="lg:w-1/2 space-y-6">
          {/* Show live preview while adding a new webinar */}
          {/* Show live preview while adding or editing a webinar */}
{formData.title && (
  <div>
    <h3 className="text-lg font-semibold text-blue-700 mb-3">
      {isEditing ? 'Live Edit Preview' : 'Live Preview'}
    </h3>
    <div>
      <WebinarDetailsCard
                  title={formData.title}
                  date={formData.date}
                  time={`${formData.time} ${formData.ampm}`}
                  duration={formData.duration}
                  presenters={formData.presenters}
                  takeaways={formData.takeaways} ampm={undefined}      />
    </div>
  </div>
)}


          {/* Existing webinars */}
         {/* Existing webinars */}
{!isEditing && !formData.title && webinars.length > 0 && (
  <div>
    {webinars.map((webinar) => (
      <div key={webinar.id} className="mb-4">
        <WebinarDetailsCard
          title={webinar.title}
          date={webinar.date}
          time={webinar.time}
          ampm={webinar.ampm}
          duration={webinar.duration}
          presenters={webinar.presenters}
          takeaways={webinar.takeaways}
        />
        <button
          onClick={() => handleEdit(webinar.id)}
          className="text-sm text-blue-600 hover:text-blue-800"
        >
          ✏️ Edit Webinar
        </button>
      </div>
    ))}
  </div>
)}

        </div>
      </div>
    </>
  );
};

export default AddWebinarForm;




