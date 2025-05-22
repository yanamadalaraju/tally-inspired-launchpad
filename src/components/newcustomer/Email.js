import React, { useState } from 'react';
import axios from 'axios';

const EmailSender = () => {
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState('');
  const [formData, setFormData] = useState({
    to: 'uppalahemanth4@gmail.com',
    subject: 'Test Email from React',
    message: 'This email was sent via a React frontend!',
  });

  const handleSendEmail = async () => {
    setIsSending(true);
    setSendStatus('Sending...');

    try {
      const response = await axios.post('http://localhost:5000/api/send-email', {
        to: formData.to,
        subject: formData.subject,
        text: formData.message,
        html: `<b>${formData.message}</b>`,
      });

      setSendStatus('Email sent successfully!');
      console.log(response.data);
    } catch (error) {
      setSendStatus('Failed to send email');
      console.error('Error:', error);
    } finally {
      setIsSending(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
      <h2>Send Email via API</h2>
      
      <div style={{ marginBottom: '10px' }}>
        <label>To:</label>
        <input
          type="email"
          name="to"
          value={formData.to}
          onChange={handleChange}
          style={{ width: '100%', padding: '8px' }}
        />
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>Subject:</label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          style={{ width: '100%', padding: '8px' }}
        />
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          style={{ width: '100%', padding: '8px', minHeight: '100px' }}
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
        }}
      >
        {isSending ? 'Sending...' : 'Send Email'}
      </button>

      {sendStatus && (
        <p style={{ color: sendStatus.includes('Failed') ? 'red' : 'green' }}>
          {sendStatus}
        </p>
      )}
    </div>
  );
};

export default EmailSender;