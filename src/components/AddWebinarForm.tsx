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

import React, { useState } from 'react';
import axios from 'axios';

const AddWebinarForm = () => {
  const [newWebinar, setNewWebinar] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    date: '',
    duration: '',
    presenters: '',
    takeaways: [''],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleTakeawayChange = (index, value) => {
    const updated = [...formData.takeaways];
    updated[index] = value;
    setFormData(prev => ({ ...prev, takeaways: updated }));
  };

  const addTakeawayField = () => {
    setFormData(prev => ({ ...prev, takeaways: [...prev.takeaways, ''] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      ...formData,
      title: formData.title.trim(),
      duration: formData.duration.trim(),
      presenters: formData.presenters.trim(),
      takeaways: formData.takeaways.map(t => t.trim()).join('\n'),
    };

    try {
      const response = await axios.post('http://localhost:5000/admin/add-webinar', payload);
      setNewWebinar(response.data);
      alert('✅ Webinar added successfully!');
      setFormData({
        title: '',
        date: '',
        duration: '',
        presenters: '',
        takeaways: [''],
      });
    } catch (error) {
      console.error('Error adding webinar:', error);
      alert('❌ Failed to add webinar.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
      <h2 className="text-2xl font-bold mb-4 text-center text-primary">➕ Add New Webinar</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Enter Webinar Title"
          value={formData.title}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="text"
          name="duration"
          placeholder="Duration (e.g., 1 Hour)"
          value={formData.duration}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="text"
          name="presenters"
          placeholder="Presenters (e.g., John, Jane)"
          value={formData.presenters}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <div>
          <label className="block font-medium mb-2">🎯 Key Takeaways</label>
          {formData.takeaways.map((item, index) => (
            <input
              key={index}
              type="text"
              value={item}
              onChange={(e) => handleTakeawayChange(index, e.target.value)}
              placeholder={`Takeaway ${index + 1}`}
              className="w-full px-4 py-2 mb-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          ))}
          <button
            type="button"
            onClick={addTakeawayField}
            className="text-blue-600 hover:text-blue-800 text-sm mt-1"
          >
            ➕ Add another takeaway
          </button>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition ${
            isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? 'Submitting...' : '📤 Submit Webinar'}
        </button>
      </form>
    </div>
  );
};

export default AddWebinarForm;
