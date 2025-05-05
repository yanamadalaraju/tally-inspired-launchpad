import React, { useState } from 'react';
import Button from './Button';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  employees: string;
  message: string;
}

const RequestDemoForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    employees: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          employees: '',
          message: '',
        });
      }, 3000);
    }, 1500);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
  <h3 className="text-xl font-semibold text-gray-800 mb-4">Book a Free Consultation</h3>

  {submitted ? (
    <div className="bg-green-50 border border-green-200 rounded-md p-3 text-green-800 text-sm">
      <h4 className="font-semibold mb-1">Thank you for your interest!</h4>
      <p>We'll contact you soon to schedule your demo.</p>
    </div>
  ) : (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
        {[
          { label: "Full Name*", name: "name", type: "text" },
          { label: "Business Email*", name: "email", type: "email" },
          { label: "Phone Number*", name: "phone", type: "tel" },
          { label: "Company Name*", name: "company", type: "text" },
        ].map(({ label, name, type }) => (
          <div key={name}>
            <label className="block text-xs font-medium text-gray-700 mb-1" htmlFor={name}>
              {label}
            </label>
            <input
              id={name}
              name={name}
              type={type}
              required
              value={(formData as any)[name]}
              onChange={handleChange}
              className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500"
            />
          </div>
        ))}

        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1" htmlFor="employees">
            Number of Employees
          </label>
          <select
            id="employees"
            name="employees"
            value={formData.employees}
            onChange={handleChange}
            className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500"
          >
            <option value="">Select</option>
            <option value="1-10">1–10</option>
            <option value="11-50">11–50</option>
            <option value="51-200">51–200</option>
            <option value="201-500">201–500</option>
            <option value="501+">501+</option>
          </select>
        </div>
      </div>

      <div className="mb-3">
        <label className="block text-xs font-medium text-gray-700 mb-1" htmlFor="message">
          How can we help you?
        </label>
        <textarea
          id="message"
          name="message"
          rows={3} // Reduced rows
          value={formData.message}
          onChange={handleChange}
          className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500"
        />
      </div>

      <div className="mt-4">
        <Button
          type="submit"
          variant="primary"
          size="sm"
          fullWidth
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Request Demo'}
        </Button>
      </div>

      <p className="text-[10px] text-gray-400 mt-3">
        By submitting, you agree to our Privacy Policy. We’ll use your info to respond and may process it as described.
      </p>
    </form>
  )}
</div>

  );
};

export default RequestDemoForm;