import React, { useState } from 'react';

const SendEmailPage: React.FC = () => {
  const [status, setStatus] = useState<string>('');

  const handleSendEmail = async () => {
    setStatus('Sending...');
    try {
      const response = await fetch('http://localhost:5000/send-mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      console.log('data',data);
      if (response.ok) {
        setStatus(data.message || '✅ Email sent successfully!');
      } else {
        setStatus(data.message || '❌ Failed to send email.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('❌ Error sending email.');
    }

  };

  return (
    <div style={styles.container}>
      <h2>📧 Send Email Using cPanel SMTP</h2>
      <button style={styles.button} onClick={handleSendEmail}>
        Send Email
      </button>
      <p style={styles.status}>{status}</p>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    textAlign: 'center',
    padding: '40px',
    fontFamily: 'Arial, sans-serif',
  },
  button: {
    padding: '12px 25px',
    fontSize: '18px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  status: {
    marginTop: '20px',
    fontWeight: 'bold',
  },
};

export default SendEmailPage;
