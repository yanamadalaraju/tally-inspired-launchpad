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
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import AdminNavbar from '@/admin/AdminNavbar';
// import WebinarDetailsCard from './webinar/WebinarDetailsCard';
// import baseURL from '@/Api';

// interface Webinar {
//   id: number;
//   title: string;
//   date: string;
//   time: string;
//   ampm: string;
//   duration: string;
//   presenters: string;
//   takeaways: string[];
// }

// interface FormData {
//   title: string;
//   date: string;
//   time: string;
//   ampm: string;
//   duration: string;
//   presenters: string;
//   takeaways: string[];
// }

// const AddWebinarForm = () => {
//   const [webinars, setWebinars] = useState<Webinar[]>([]);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [formData, setFormData] = useState<FormData>({
//     title: '',
//     date: '',
//     time: '',
//     ampm: 'AM',
//     duration: '',
//     presenters: '',
//     takeaways: [''],
//   });
//   const [isEditing, setIsEditing] = useState(false);
//   const [editingWebinarId, setEditingWebinarId] = useState<number | null>(null);

//   useEffect(() => {
//     const fetchWebinars = async () => {
//       try {
//         const response = await axios.get(`${baseURL}/webinars`);
//         const formattedData = response.data.map((w: any) => ({
//           ...w,
//           takeaways: JSON.parse(w.takeaways || '[]'),
//         }));
//         setWebinars(formattedData);
//       } catch (error) {
//         console.error('Error fetching webinars:', error);
//       }
//     };

//     fetchWebinars();
//   }, []);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleTakeawayChange = (index: number, value: string) => {
//     const updated = [...formData.takeaways];
//     updated[index] = value;
//     setFormData((prev) => ({ ...prev, takeaways: updated }));
//   };

//   const addTakeawayField = () => {
//     if (formData.takeaways.length < 3) {
//       setFormData((prev) => ({ ...prev, takeaways: [...prev.takeaways, ''] }));
//     } else {
//       alert('❗ Maximum of 3 takeaways allowed.');
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     const payload = {
//       ...formData,
//       title: formData.title.trim(),
//       duration: formData.duration.trim(),
//       presenters: formData.presenters.trim(),
//       takeaways: formData.takeaways.map((t) => t.trim()).join('\n'),
//       time: `${formData.time.trim()} ${formData.ampm}`,
//     };

//     try {
//       if (isEditing && editingWebinarId) {
//         await axios.put(
//           `${baseURL}/admin/edit-webinar/${editingWebinarId}`,
//           payload
//         );
//         alert('✅ Webinar updated successfully!');
//       } else {
//         const response = await axios.post(
//           `${baseURL}/admin/add-webinar`,
//           payload
//         );
//         alert(`✅ Webinar added successfully with ID: ${response.data.webinar_id}`);
//       }

//       const refetch = await axios.get(`${baseURL}/webinars`);
//       const formatted = refetch.data.map((w: any) => ({
//         ...w,
//         takeaways: JSON.parse(w.takeaways || '[]'),
//       }));
//       setWebinars(formatted);
      
//       setIsEditing(false);
//       setEditingWebinarId(null);
//       setFormData({
//         title: '',
//         date: '',
//         time: '',
//         ampm: 'AM',
//         duration: '',
//         presenters: '',
//         takeaways: [''],
//       });
//     } catch (error) {
//       console.error('Error submitting webinar:', error);
//       alert('❌ Failed to submit webinar.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleEdit = (webinarId: number) => {
//     const webinarToEdit = webinars.find((w) => w.id === webinarId);
//     if (!webinarToEdit) return;

//     setEditingWebinarId(webinarId);
//     setIsEditing(true);

//     const [time, ampm] = webinarToEdit.time.split(' ');
//     setFormData({
//       title: webinarToEdit.title,
//       date: webinarToEdit.date,
//       time: time || '',
//       ampm: ampm || 'AM',
//       duration: webinarToEdit.duration,
//       presenters: webinarToEdit.presenters,
//       takeaways: webinarToEdit.takeaways || [''],
//     });
//   };

//   const getMostRecentWebinar = (): Webinar | null => {
//     if (webinars.length === 0) return null;
    
//     const sorted = [...webinars].sort((a, b) => {
//       const dateA = new Date(`${a.date} ${a.time}`).getTime();
//       const dateB = new Date(`${b.date} ${b.time}`).getTime();
//       return dateB - dateA;
//     });
    
//     return sorted[0];
//   };

//   const mostRecentWebinar = getMostRecentWebinar();

//   return (
//     <>
//       <AdminNavbar />
//       <div className="flex flex-col lg:flex-row max-w-6xl mx-auto mt-28 p-6 gap-6">
//         {/* Form Section */}
//         <div className="lg:w-1/2 bg-white p-4 rounded-lg shadow-lg border border-gray-200">
//           <h2 className="text-lg font-semibold text-center text-blue-700 mb-2">
//             {isEditing ? '✏️ Edit Webinar' : '➕ Add New Webinar'}
//           </h2>

//           <form onSubmit={handleSubmit} className="space-y-3 text-sm">
//             <div>
//               <label className="block text-base font-medium mb-1 text-gray-700">Webinar Title</label>
//               <input
//                 type="text"
//                 name="title"
//                 placeholder="Webinar Title"
//                 value={formData.title}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-2 py-1.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
//               />
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//               <div>
//                 <label className="block text-base font-medium mb-1 text-gray-700">Date</label>
//                 <input
//                   type="date"
//                   name="date"
//                   value={formData.date}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-2 py-1.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
//                 />
//               </div>

//               <div className="flex gap-3">
//                 <div>
//                   <label className="block text-base font-medium mb-1 text-gray-700">Time</label>
//                   <input
//                     type="time"
//                     name="time"
//                     value={formData.time}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-2 py-1.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-base font-medium mb-1 text-gray-700">AM/PM</label>
//                   <select
//                     name="ampm"
//                     value={formData.ampm}
//                     onChange={handleChange}
//                     className="w-full px-2 py-1.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
//                   >
//                     <option value="AM">AM</option>
//                     <option value="PM">PM</option>
//                   </select>
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-base font-medium mb-1 text-gray-700">Duration</label>
//                 <input
//                   type="text"
//                   name="duration"
//                   placeholder="Duration (e.g., 1 Hour)"
//                   value={formData.duration}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-2 py-1.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
//                 />
//               </div>

//               <div>
//                 <label className="block text-base font-medium mb-1 text-gray-700">Presenters</label>
//                 <input
//                   type="text"
//                   name="presenters"
//                   placeholder="Presenters (e.g., John, Jane)"
//                   value={formData.presenters}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-2 py-1.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="block text-base font-medium mb-1 text-gray-700">🎯 Key Takeaways</label>
//               {formData.takeaways.map((item, index) => (
//                 <input
//                   key={index}
//                   type="text"
//                   value={item}
//                   onChange={(e) => handleTakeawayChange(index, e.target.value)}
//                   placeholder={`Takeaway ${index + 1}`}
//                   className="w-full px-2 py-1.5 mb-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
//                   required
//                 />
//               ))}
//               {formData.takeaways.length < 3 && (
//                 <button
//                   type="button"
//                   onClick={addTakeawayField}
//                   className="text-sm text-blue-600 hover:text-blue-800 mt-1"
//                 >
//                   ➕ Add another takeaway
//                 </button>
//               )}
//             </div>

//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className={`w-full py-2 text-sm text-white font-medium rounded-md transition ${
//                 isSubmitting
//                   ? 'bg-blue-300 cursor-not-allowed'
//                   : 'bg-blue-600 hover:bg-blue-700'
//               }`}
//             >
//               {isSubmitting ? 'Submitting...' : isEditing ? '✏️ Update Webinar' : '📤 Submit Webinar'}
//             </button>
//           </form>
//         </div>

//         {/* Webinar Details Section */}
//         <div className="lg:w-1/2 space-y-6">
//           {/* Live Preview */}
//           {(formData.title || isEditing) && (
//             <div>
//               <h3 className="text-lg font-semibold text-blue-700 mb-3">
//                 {isEditing ? 'Live Edit Preview' : 'Live Preview'}
//               </h3>
//               <WebinarDetailsCard
//                 title={formData.title}
//                 date={formData.date}
//                 time={`${formData.time} ${formData.ampm}`}
//                 ampm={formData.ampm}
//                 duration={formData.duration}
//                 presenters={formData.presenters}
//                 takeaways={formData.takeaways}
//               />
//             </div>
//           )}

//           {/* Most Recent Webinar */}
//           {!isEditing && !formData.title && mostRecentWebinar && (
//             <div>
//               <h3 className="text-lg font-semibold text-blue-700 mb-3">
//                 Most Recent Webinar
//               </h3>
//               <WebinarDetailsCard
//                 title={mostRecentWebinar.title}
//                 date={mostRecentWebinar.date}
//                 time={mostRecentWebinar.time}
//                 ampm={mostRecentWebinar.ampm}
//                 duration={mostRecentWebinar.duration}
//                 presenters={mostRecentWebinar.presenters}
//                 takeaways={mostRecentWebinar.takeaways}
//               />
//               <button
//                 onClick={() => handleEdit(mostRecentWebinar.id)}
//                 className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
//               >
//                 ✏️ Edit This Webinar
//               </button>
//             </div>
//           )}

//           {/* Empty state */}
//           {!formData.title && !isEditing && !mostRecentWebinar && (
//             <div className="p-4 bg-gray-100 rounded-lg text-center">
//               <p className="text-gray-600">No webinars found. Add your first webinar!</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default AddWebinarForm;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import AdminNavbar from '@/admin/AdminNavbar';
// import WebinarDetailsCard from './webinar/WebinarDetailsCard';
// import baseURL from '@/Api';

// interface Webinar {
//   id: number;
//   title: string;
//   date: string;
//   time: string;
//   ampm: string;
//   duration: string;
//   presenters: string;
//   takeaways: string[];
// }

// interface FormData {
//   title: string;
//   date: string;
//   time: string;
//   ampm: string;
//   duration: string;
//   presenters: string;
//   takeaways: string[];
// }

// const AddWebinarForm = () => {
//   const [webinars, setWebinars] = useState<Webinar[]>([]);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [formData, setFormData] = useState<FormData>({
//     title: '',
//     date: '',
//     time: '',
//     ampm: 'AM',
//     duration: '',
//     presenters: '',
//     takeaways: [''],
//   });
//   const [isEditing, setIsEditing] = useState(false);
//   const [editingWebinarId, setEditingWebinarId] = useState<number | null>(null);

//   useEffect(() => {
//     const fetchWebinars = async () => {
//       try {
//         const response = await axios.get(`${baseURL}/webinars`);
//         const formattedData = response.data.map((w: any) => ({
//           ...w,
//           takeaways: JSON.parse(w.takeaways || '[]'),
//         }));
//         setWebinars(formattedData);
//       } catch (error) {
//         console.error('Error fetching webinars:', error);
//       }
//     };

//     fetchWebinars();
//   }, []);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleTakeawayChange = (index: number, value: string) => {
//     const updated = [...formData.takeaways];
//     updated[index] = value;
//     setFormData((prev) => ({ ...prev, takeaways: updated }));
//   };

//   const addTakeawayField = () => {
//     if (formData.takeaways.length < 3) {
//       setFormData((prev) => ({ ...prev, takeaways: [...prev.takeaways, ''] }));
//     } else {
//       alert('❗ Maximum of 3 takeaways allowed.');
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     const payload = {
//       ...formData,
//       title: formData.title.trim(),
//       duration: formData.duration.trim(),
//       presenters: formData.presenters.trim(),
//       takeaways: formData.takeaways.map((t) => t.trim()).join('\n'),
//       time: `${formData.time.trim()} ${formData.ampm}`,
//     };

//     try {
//       if (isEditing && editingWebinarId) {
//         await axios.put(
//           `${baseURL}/admin/edit-webinar/${editingWebinarId}`,
//           payload
//         );
//         alert('✅ Webinar updated successfully!');
//       } else {
//         const response = await axios.post(
//           `${baseURL}/admin/add-webinar`,
//           payload
//         );
//         alert(`✅ Webinar added successfully with ID: ${response.data.webinar_id}`);
//       }

      

//       const refetch = await axios.get(`${baseURL}/webinars`);
//       const formatted = refetch.data.map((w: any) => ({
//         ...w,
//         takeaways: JSON.parse(w.takeaways || '[]'),
//       }));
//       setWebinars(formatted);
      
//       setIsEditing(false);
//       setEditingWebinarId(null);
//       setFormData({
//         title: '',
//         date: '',
//         time: '',
//         ampm: 'AM',
//         duration: '',
//         presenters: '',
//         takeaways: [''],
//       });
//     } catch (error) {
//       console.error('Error submitting webinar:', error);
//       alert('❌ Failed to submit webinar.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleEdit = (webinarId: number) => {
//     const webinarToEdit = webinars.find((w) => w.id === webinarId);
//     if (!webinarToEdit) return;

//     setEditingWebinarId(webinarId);
//     setIsEditing(true);

//     const [time, ampm] = webinarToEdit.time.split(' ');
//     setFormData({
//       title: webinarToEdit.title,
//       date: webinarToEdit.date,
//       time: time || '',
//       ampm: ampm || 'AM',
//       duration: webinarToEdit.duration,
//       presenters: webinarToEdit.presenters,
//       takeaways: webinarToEdit.takeaways || [''],
//     });
//   };

//   // const getMostRecentWebinar = (): Webinar | null => {
//   //   if (webinars.length === 0) return null;
    
//   //   const sorted = [...webinars].sort((a, b) => {
//   //     const dateA = new Date(`${a.date} ${a.time}`).getTime();
//   //     const dateB = new Date(`${b.date} ${b.time}`).getTime();
//   //     return dateB - dateA;
//   //   });
    
//   //   return sorted[0];
//   // };
//  const getMostRecentWebinar = (): Webinar | null => {
//   if (webinars.length === 0) return null;

//   // Create a copy and sort by date and time (newest first)
//   const sorted = [...webinars].sort((a, b) => {
//     // Combine date and time with AM/PM for proper comparison
//     const dateA = new Date(`${a.date} ${a.time} ${a.ampm}`).getTime();
//     const dateB = new Date(`${b.date} ${b.time} ${b.ampm}`).getTime();
//     return dateB - dateA; // Sort newest to oldest
//   });

//   return sorted[0];
// };
//   const mostRecentWebinar = getMostRecentWebinar();

//   return (
//     <>
//       <AdminNavbar />
//       <div className="flex flex-col lg:flex-row max-w-6xl mx-auto mt-28 p-6 gap-6">
//         {/* Form Section */}
//         <div className="lg:w-1/2 bg-white p-4 rounded-lg shadow-lg border border-gray-200">
//           <h2 className="text-lg font-semibold text-center text-blue-700 mb-2">
//             {isEditing ? '✏️ Edit Webinar' : '➕ Add New Webinar'}
//           </h2>

//           <form onSubmit={handleSubmit} className="space-y-3 text-sm">
//             <div>
//               <label className="block text-base font-medium mb-1 text-gray-700">Webinar Title</label>
//               <input
//                 type="text"
//                 name="title"
//                 placeholder="Webinar Title"
//                 value={formData.title}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-2 py-1.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
//               />
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//               <div>
//                 <label className="block text-base font-medium mb-1 text-gray-700">Date</label>
//                 <input
//                   type="date"
//                   name="date"
//                   value={formData.date}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-2 py-1.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
//                 />
//               </div>

//               <div className="flex gap-3">
//                 <div>
//                   <label className="block text-base font-medium mb-1 text-gray-700">Time</label>
//                   <input
//                     type="time"
//                     name="time"
//                     value={formData.time}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-2 py-1.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-base font-medium mb-1 text-gray-700">AM/PM</label>
//                   <select
//                     name="ampm"
//                     value={formData.ampm}
//                     onChange={handleChange}
//                     className="w-full px-2 py-1.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
//                   >
//                     <option value="AM">AM</option>
//                     <option value="PM">PM</option>
//                   </select>
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-base font-medium mb-1 text-gray-700">Duration</label>
//                 <input
//                   type="text"
//                   name="duration"
//                   placeholder="Duration (e.g., 1 Hour)"
//                   value={formData.duration}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-2 py-1.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
//                 />
//               </div>

//               <div>
//                 <label className="block text-base font-medium mb-1 text-gray-700">Presenters</label>
//                 <input
//                   type="text"
//                   name="presenters"
//                   placeholder="Presenters (e.g., John, Jane)"
//                   value={formData.presenters}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-2 py-1.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="block text-base font-medium mb-1 text-gray-700">🎯 Key Takeaways</label>
//               {formData.takeaways.map((item, index) => (
//                 <input
//                   key={index}
//                   type="text"
//                   value={item}
//                   onChange={(e) => handleTakeawayChange(index, e.target.value)}
//                   placeholder={`Takeaway ${index + 1}`}
//                   className="w-full px-2 py-1.5 mb-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
//                   required
//                 />
//               ))}
//               {formData.takeaways.length < 3 && (
//                 <button
//                   type="button"
//                   onClick={addTakeawayField}
//                   className="text-sm text-blue-600 hover:text-blue-800 mt-1"
//                 >
//                   ➕ Add another takeaway
//                 </button>
//               )}
//             </div>

//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className={`w-full py-2 text-sm text-white font-medium rounded-md transition ${
//                 isSubmitting
//                   ? 'bg-blue-300 cursor-not-allowed'
//                   : 'bg-blue-600 hover:bg-blue-700'
//               }`}
//             >
//               {isSubmitting ? 'Submitting...' : isEditing ? '✏️ Update Webinar' : '📤 Submit Webinar'}
//             </button>
//           </form>
//         </div>

//         {/* Webinar Details Section */}
//         <div className="lg:w-1/2 space-y-6">
//           {/* Live Preview */}
//           {(formData.title || isEditing) && (
//             <div>
//               <h3 className="text-lg font-semibold text-blue-700 mb-3">
//                 {isEditing ? 'Live Edit Preview' : 'Live Preview'}
//               </h3>
//               <WebinarDetailsCard
//                 title={formData.title}
//                 date={formData.date}
//                 time={`${formData.time} ${formData.ampm}`}
//                 ampm={formData.ampm}
//                 duration={formData.duration}
//                 presenters={formData.presenters}
//                 takeaways={formData.takeaways}
//               />
//             </div>
//           )}

//           {/* Most Recent Webinar */}
//           {!isEditing && !formData.title && mostRecentWebinar && (
//             <div>
//               <h3 className="text-lg font-semibold text-blue-700 mb-3">
//                 Most Recent Webinar
//               </h3>
//               <WebinarDetailsCard
//                 title={mostRecentWebinar.title}
//                 date={mostRecentWebinar.date}
//                 time={mostRecentWebinar.time}
//                 ampm={mostRecentWebinar.ampm}
//                 duration={mostRecentWebinar.duration}
//                 presenters={mostRecentWebinar.presenters}
//                 takeaways={mostRecentWebinar.takeaways}
//               />
//               <button
//                 onClick={() => handleEdit(mostRecentWebinar.id)}
//                 className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
//               >
//                 ✏️ Edit This Webinar
//               </button>
//             </div>
//           )}

//           {/* Empty state */}
//           {!formData.title && !isEditing && !mostRecentWebinar && (
//             <div className="p-4 bg-gray-100 rounded-lg text-center">
//               <p className="text-gray-600">No webinars found. Add your first webinar!</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default AddWebinarForm;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminNavbar from '@/admin/AdminNavbar';
import WebinarDetailsCard from './webinar/WebinarDetailsCard';
import baseURL from '@/Api';

interface Webinar {
  id: number;
  title: string;
  date: string;
  time: string;
  ampm: string;
  duration: string;
  presenters: string;
  takeaways: string[];
   whatsapp_link: string;
}

interface FormData {
  title: string;
  date: string;
  time: string;
  ampm: string;
  duration: string;
  presenters: string;
  takeaways: string[];
  whatsapp_link: string;
}

const AddWebinarForm = () => {
  const [webinars, setWebinars] = useState<Webinar[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    title: '',
    date: '',
    time: '',
    ampm: 'AM',
    duration: '',
    presenters: '',
    takeaways: [''],
     whatsapp_link: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editingWebinarId, setEditingWebinarId] = useState<number | null>(null);
  const [loading, setLoading] = useState(false); // Loading state

  useEffect(() => {
    const fetchWebinars = async () => {
      setLoading(true); // Start loading
      try {
        const response = await axios.get(`${baseURL}/webinars`);
        const formattedData = response.data.map((w: any) => ({
          ...w,
          takeaways: JSON.parse(w.takeaways || '[]'),
        }));
        setWebinars(formattedData);
      } catch (error) {
        console.error('Error fetching webinars:', error);
      } finally {
        setLoading(false); // End loading
      }
    };

    fetchWebinars();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTakeawayChange = (index: number, value: string) => {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      ...formData,
      title: formData.title.trim(),
      duration: formData.duration.trim(),
      presenters: formData.presenters.trim(),
      takeaways: formData.takeaways.map((t) => t.trim()).join('\n'),
      time: `${formData.time.trim()} ${formData.ampm}`,
      whatsapp_link: formData.whatsapp_link.trim(),
    };

    try {
      if (isEditing && editingWebinarId) {
        await axios.put(`${baseURL}/admin/edit-webinar/${editingWebinarId}`, payload);
        alert('✅ Webinar updated successfully!');
      } else {
        const response = await axios.post(`${baseURL}/admin/add-webinar`, payload);
        alert(`✅ Webinar added successfully with ID: ${response.data.webinar_id}`);
      }

      const refetch = await axios.get(`${baseURL}/webinars`);
      const formatted = refetch.data.map((w: any) => ({
        ...w,
        takeaways: JSON.parse(w.takeaways || '[]'),
      }));
      setWebinars(formatted);
      
      setIsEditing(false);
      setEditingWebinarId(null);
      setFormData({
        title: '',
        date: '',
        time: '',
        ampm: 'AM',
        duration: '',
        presenters: '',
        takeaways: [''],
        whatsapp_link: '',
      });
    } catch (error) {
      console.error('Error submitting webinar:', error);
      alert('❌ Failed to submit webinar.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEdit = (webinarId: number) => {
    const webinarToEdit = webinars.find((w) => w.id === webinarId);
    if (!webinarToEdit) return;

    setEditingWebinarId(webinarId);
    setIsEditing(true);

    const [time, ampm] = webinarToEdit.time.split(' ');
    setFormData({
      title: webinarToEdit.title,
      date: webinarToEdit.date,
      time: time || '',
      ampm: ampm || 'AM',
      duration: webinarToEdit.duration,
      presenters: webinarToEdit.presenters,
      takeaways: webinarToEdit.takeaways || [''],
       whatsapp_link: webinarToEdit.whatsapp_link || '',
    });
  };

  const getMostRecentWebinar = (): Webinar | null => {
    if (webinars.length === 0) return null;

    const sorted = [...webinars].sort((a, b) => {
      const dateA = new Date(`${a.date} ${a.time} ${a.ampm}`).getTime();
      const dateB = new Date(`${b.date} ${b.time} ${b.ampm}`).getTime();
      return dateB - dateA;
    });

    return sorted[0];
  };

  const mostRecentWebinar = getMostRecentWebinar();

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
                    value={formData.ampm}
                    onChange={handleChange}
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
          {/* Live Preview */}
          {(formData.title || isEditing) && (
            <div>
              <h3 className="text-lg font-semibold text-blue-700 mb-3">
                {isEditing ? 'Live Edit Preview' : 'Live Preview'}
              </h3>
              <WebinarDetailsCard
                title={formData.title}
                date={formData.date}
                time={`${formData.time} ${formData.ampm}`}
                ampm={formData.ampm}
                duration={formData.duration}
                presenters={formData.presenters}
                takeaways={formData.takeaways} whatsapp_link={''} onEdit={function (): void {
                  throw new Error('Function not implemented.');
                } }              />
            </div>
          )}

          {/* Most Recent Webinar */}
          {!isEditing && !formData.title && mostRecentWebinar && (
            <div>
              <h3 className="text-lg font-semibold text-blue-700 mb-3">
                Most Recent Webinar
              </h3>
              <WebinarDetailsCard
                title={mostRecentWebinar.title}
                date={mostRecentWebinar.date}
                time={mostRecentWebinar.time}
                ampm={mostRecentWebinar.ampm}
                duration={mostRecentWebinar.duration}
                presenters={mostRecentWebinar.presenters}
                takeaways={mostRecentWebinar.takeaways} whatsapp_link={''} onEdit={function (): void {
                  throw new Error('Function not implemented.');
                } }              />
              <button
                onClick={() => handleEdit(mostRecentWebinar.id)}
                className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              >
                ✏️ Edit This Webinar
              </button>
            </div>
          )}

          {/* Empty state */}
          {!formData.title && !isEditing && !mostRecentWebinar && (
            <div className="p-4 bg-gray-100 rounded-lg text-center">
              <p className="text-gray-600">No webinars found. Add your first webinar!</p>
            </div>
          )}
        </div>
      </div>

      {/* <div className="mt-6 pt-4 border-t border-gray-200">
        <h3 className="text-lg font-medium text-gray-800 mb-2">WhatsApp Group Link</h3>
        <div>
          <input
            type="url"
            name="whatsapp_link"
            placeholder="https://chat.whatsapp.com/..."
            value={formData.whatsapp_link}
            onChange={handleChange}
            className="w-full px-2 py-1.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          <p className="text-xs text-gray-500 mt-1">
            Add the invite link for the WhatsApp group (optional)
          </p>
        </div>
      </div> */}
      
      <div className="mx-[90px] mt-8 mb-8">
  <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200">
    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
      <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16.5 13.5c-.4-.2-2.3-1.1-2.7-1.2-.3-.1-.5-.2-.7.2s-.8 1.2-1 1.5-.4.3-.7.1c-.9-.4-1.8-1.1-2.5-2s-1.6-2.3-2-3.2c-.1-.3 0-.5.1-.7.1-.1.3-.3.5-.5.2-.2.3-.3.5-.6.1-.2.1-.4 0-.6s-.7-1.8-1-2.4c-.3-.7-.5-.6-.7-.6H6c-.2 0-.5.1-.7.3-.2.2-1.3 1.2-1.3 3s1.4 3.5 1.6 3.8c.2.3 2.8 4.2 6.7 5.9.9.4 1.6.6 2.1.7.9.3 1.8.3 2.5.2.8-.1 2.3-.9 2.6-1.7.3-.8.3-1.5.2-1.7s-.3-.2-.7-.4zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.6 1.3 5.1L2 22l5-1.3c1.5.8 3.3 1.3 5 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
      </svg>
      WhatsApp Group Link
    </h3>
    <input
      type="url"
      name="whatsapp_link"
      placeholder="https://chat.whatsapp.com/..."
      value={formData.whatsapp_link}
      onChange={handleChange}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-200"
    />
    <p className="text-sm text-gray-500 mt-2">
      Optional: Add the invite link for the WhatsApp group. Ensure it's a valid public invite.
    </p>
  </div>
</div>





    </>
  );
};

export default AddWebinarForm;