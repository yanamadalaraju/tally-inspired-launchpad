// import React, { useState } from 'react';
// import { sendEmail } from '../../components/newcustomer/emailService';

// const EmailForm: React.FC = () => {
//   const [formData, setFormData] = useState({
//     to: '',
//     subject: '',
//     message: ''
//   });
//   const [isSending, setIsSending] = useState(false);
//   const [status, setStatus] = useState<{ success?: boolean; message?: string }>({});

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSending(true);
//     setStatus({});
    
//     try {
//       await sendEmail({
//         to: formData.to,
//         subject: formData.subject,
//         text: formData.message,
//         html: `<p>${formData.message}</p>`
//       });
      
//       setStatus({ success: true, message: 'Email sent successfully!' });
//       setFormData({ to: '', subject: '', message: '' });
//     } catch (error) {
//       setStatus({ success: false, message: error instanceof Error ? error.message : 'Failed to send email' });
//     } finally {
//       setIsSending(false);
//     }
//   };

//   return (
//     <div className="email-form-container">
//       <h2>Send Email</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="to">To:</label>
//           <input
//             type="email"
//             id="to"
//             name="to"
//             value={formData.to}
//             onChange={handleChange}
//             required
//           />
//         </div>
        
//         <div className="form-group">
//           <label htmlFor="subject">Subject:</label>
//           <input
//             type="text"
//             id="subject"
//             name="subject"
//             value={formData.subject}
//             onChange={handleChange}
//             required
//           />
//         </div>
        
//         <div className="form-group">
//           <label htmlFor="message">Message:</label>
//           <textarea
//             id="message"
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             required
//             rows={5}
//           />
//         </div>
        
//         <button type="submit" disabled={isSending}>
//           {isSending ? 'Sending...' : 'Send Email'}
//         </button>
        
//         {status.message && (
//           <div className={`status ${status.success ? 'success' : 'error'}`}>
//             {status.message}
//           </div>
//         )}
//       </form>
//     </div>
//   );
// };

// export default EmailForm;