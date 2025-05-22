import React, { useState } from 'react';
import axios, { AxiosError } from 'axios';

interface EmailFormData {
  to: string;
  subject: string;
  message: string;
}

interface ApiResponse {
  success: boolean;
  message: string;
  messageId?: string;
  error?: string;
}

const EmailSender: React.FC = () => {
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState('');
  const [formData, setFormData] = useState<EmailFormData>({
    to: 'uppalahemanth4@gmail.com',
    subject: 'Test Email from React (TS)',
    message: 'This email was sent via a TypeScript frontend!'
  });

const handleSendEmail = async () => {
  setIsSending(true);
  setSendStatus('Sending...');

  // Create proper HTML string
  const htmlContent = `<html><body><b>${formData.message}</b></body></html>`;

  try {
    const response = await axios.post<ApiResponse>(
      'http://localhost:5000/api/send-email',
      {
        to: formData.to,
        subject: formData.subject,
        text: formData.message,  // Plain text version
        html: htmlContent        // Proper HTML version
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    );

    setSendStatus(`Email sent! Message ID: ${response.data.messageId}`);
  } 
   catch (error) {
      const axiosError = error as AxiosError<ApiResponse>;
      const errorMessage = axiosError.response?.data?.error 
        || axiosError.message
        || 'Failed to send email';
      
      setSendStatus(`Error: ${errorMessage}`);
      console.error('Full error:', {
        config: axiosError.config,
        response: axiosError.response?.data,
        stack: axiosError.stack
      });
    } finally {
      setIsSending(false);
    }
  };

//   const handleSendEmail = async () => {
//     setIsSending(true);
//     setSendStatus('Sending...');

//     // Log the payload before sending
//     console.log('Sending payload:', {
//       to: formData.to,
//       subject: formData.subject,
//       text: formData.message,
//       html: <b>${formData.message}</b>
//     });

//     try {
//       // Change this part in handleSendEmail:
// const response = await axios.post<ApiResponse>(
//   'http://localhost:5000/api/send-email',
//   {
//     to: formData.to,
//     subject: formData.subject,
//     text: formData.message,
//     html: `<b>${formData.message}</b>` // Notice the backticks for template literal
//   },
//   {
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   }
// );

//       setSendStatus(`Email sent! Message ID: ${response.data.messageId}`);
//       console.log('Full response:', response.data);
  //   } catch (error) {
  //     const axiosError = error as AxiosError<ApiResponse>;
  //     const errorMessage = axiosError.response?.data?.error 
  //       || axiosError.message
  //       || 'Failed to send email';
      
  //     setSendStatus(`Error: ${errorMessage}`);
  //     console.error('Full error:', {
  //       config: axiosError.config,
  //       response: axiosError.response?.data,
  //       stack: axiosError.stack
  //     });
  //   } finally {
  //     setIsSending(false);
  //   }
  // };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div style={{ 
      padding: '20px', 
      maxWidth: '500px', 
      margin: '0 auto',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h2>Send Email (TypeScript)</h2>
      
      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>To:</label>
        <input
          type="email"
          name="to"
          value={formData.to}
          onChange={handleChange}
          disabled={isSending}
          style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Subject:</label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          disabled={isSending}
          style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          disabled={isSending}
          style={{ 
            width: '100%', 
            padding: '8px', 
            minHeight: '100px',
            boxSizing: 'border-box'
          }}
        />
      </div>

      <button
        onClick={handleSendEmail}
        disabled={isSending}
        style={{
          backgroundColor: isSending ? '#cccccc' : '#4CAF50',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '16px',
          width: '100%'
        }}
      >
        {isSending ? 'Sending...' : 'Send Email'}
      </button>

      {sendStatus && (
        <p style={{ 
          marginTop: '15px',
          color: sendStatus.includes('Error') ? 'red' : 'green',
          wordBreak: 'break-word'
        }}>
          {sendStatus}
        </p>
      )}
    </div>
  );
};

export default EmailSender;