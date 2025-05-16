import React, { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { RefreshCw, Download, MessageSquare } from "lucide-react";
import './HeroSection.css';
import baseURL from '@/Api';

const ExistingHerosection = () => {
  const formRef = useRef(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [shakeForm, setShakeForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [message, setMessage] = useState('');

  const handleFormShake = () => {
    setShakeForm(true);
    setTimeout(() => {
      setShakeForm(false);
    }, 500);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, company, message } = formData;

    if (name && email && company && message) {
      setLoading(true);
      try {
        const response = await fetch(`${baseURL}/contact-us`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setFormSubmitted(true);
          setMessage('✅ Your message has been sent successfully!');
        } else {
          setMessage('❌ Error sending message. Please try again.');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        setMessage('❌ Error sending message. Please try again.');
      } finally {
        setLoading(false);
      }
    } else {
      handleFormShake();
      setMessage('❌ Please fill all required fields.');
    }
  };

  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-r from-primary to-primary-light text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row-reverse items-center">
          <div className="md:w-1/3 mx-auto mt-10">
            <div className={`bg-white rounded-xl p-6 shadow-lg w-full max-w-md text-primary ${shakeForm ? 'shake-form' : ''}`}>
              {!formSubmitted ? (
                <>
                  <h2 className="text-xl font-bold text-center mb-1 text-primary">
                    🚀 Get in Touch with Us for More Details
                  </h2>
                  <p className="text-xs text-center text-gray-500 mb-4">
                    We are here to assist you.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-3 text-sm">
                    <input type="text" required name="name" placeholder="Full Name *" value={formData.name} onChange={handleInputChange} className="block w-full px-3 py-2 rounded border border-gray-300" />
                    <input type="email" required name="email" placeholder="Email *" value={formData.email} onChange={handleInputChange} className="block w-full px-3 py-2 rounded border border-gray-300" />
                    <input type="text" required name="company" placeholder="Company Name *" value={formData.company} onChange={handleInputChange} className="block w-full px-3 py-2 rounded border border-gray-300" />
                    <textarea
                      required
                      name="message"
                      placeholder="Your Message *"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="block w-full px-3 py-2 rounded border border-gray-300"
                      rows={4} // Use a number here instead of a string
                    ></textarea>

                    <button
                      type="submit"
                      disabled={loading}
                      className={`w-full bg-secondary hover:bg-secondary-light text-white py-2 rounded-lg flex items-center justify-center gap-2 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </form>
                </>
              ) : (
                <div className="flex justify-center items-center py-8 px-3 bg-gradient-to-r from-green-50 to-green-100">
                  <div className="max-w-sm w-full bg-white shadow-md rounded-md p-5 text-center">
                    <h2 className="text-lg font-bold text-green-600 mb-3">✅ Message Sent Successfully!</h2>
                    <p className="text-sm text-gray-700 mb-4">Thank you for reaching out. We will get back to you soon.</p>
                    <div className="bg-green-100 text-green-800 px-4 py-2 rounded-md text-xs mb-4 shadow-sm">
                      Check your inbox for a confirmation email.
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExistingHerosection;
