// import axios from 'axios';

// const API_BASE_URL = 'http://localhost:5000'; // Change to your backend URL in production

// interface EmailData {
//   to: string;
//   subject: string;
//   text?: string;
//   html?: string;
// }

// export const sendEmail = async (emailData: EmailData) => {
//   try {
//     const response = await axios.post(`${API_BASE_URL}/api/send-email`, emailData);
//     return response.data;
//   } catch (error) {
//     if (axios.isAxiosError(error)) {
//       throw new Error(error.response?.data?.error || 'Failed to send email');
//     }
//     throw new Error('Failed to send email');
//   }
// };