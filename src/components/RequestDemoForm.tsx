// import React, { useState } from 'react';
// import Button from './Button';

// interface FormData {
//   name: string;
//   email: string;
//   phone: string;
//   company: string;
//   message: string;
// }

// const RequestDemoForm: React.FC = () => {
//   const [formData, setFormData] = useState<FormData>({
//     name: '',
//     email: '',
//     phone: '',
//     company: '',
//     message: '',
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       const response = await fetch('http://localhost:5000/submit-form', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         setIsSubmitting(false);
//         setSubmitted(true);

//         setTimeout(() => {
//           setSubmitted(false);
//           setFormData({
//             name: '',
//             email: '',
//             phone: '',
//             company: '',
//             message: '',
//           });
//         }, 3000);
//       } else {
//         throw new Error('Form submission failed');
//       }
//     } catch (error) {
//       console.error(error);
//       setIsSubmitting(false);
//       alert('An error occurred. Please try again.');
//     }
//   };

//   return (
//     <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
//       <h3 className="text-xl font-semibold text-gray-800 mb-4">Book a Free Consultation</h3>

//       {submitted ? (
//         <div className="bg-green-50 border border-green-200 rounded-md p-3 text-green-800 text-sm">
//           <h4 className="font-semibold mb-1">Thank you for your interest!</h4>
//           <p>We'll contact you soon to schedule your demo.</p>
//         </div>
//       ) : (
//         <form onSubmit={handleSubmit}>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
//             {[{ label: "Full Name*", name: "name", type: "text" },
//               { label: "Business Email*", name: "email", type: "email" },
//               { label: "Phone Number*", name: "phone", type: "tel" },
//               { label: "Company Name*", name: "company", type: "text" }]
//               .map(({ label, name, type }) => (
//                 <div key={name}>
//                   <label className="block text-xs font-medium text-gray-700 mb-1" htmlFor={name}>
//                     {label}
//                   </label>
//                   <input
//                     id={name}
//                     name={name}
//                     type={type}
//                     required
//                     value={(formData as any)[name]}
//                     onChange={handleChange}
//                     className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500"
//                   />
//                 </div>
//               ))}
//           </div>

//           <div className="mb-3">
//             <label className="block text-xs font-medium text-gray-700 mb-1" htmlFor="message">
//               How can we help you?
//             </label>
//             <textarea
//               id="message"
//               name="message"
//               rows={3}
//               value={formData.message}
//               onChange={handleChange}
//               className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500"
//             />
//           </div>

//           <div className="mt-4">
//             <Button
//               type="submit"
//               variant="primary"
//               size="sm"
//               fullWidth
//               disabled={isSubmitting}
//             >
//               {isSubmitting ? 'Submitting...' : 'Request Demo'}
//             </Button>
//           </div>

//           <p className="text-[10px] text-gray-400 mt-3">
//             By submitting, you agree to our Privacy Policy. We’ll use your info to respond and may process it as described.
//           </p>
//         </form>
//       )}
//     </div>
//   );
// };

// export default RequestDemoForm;

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const predefinedPrice = 1;

const RequestDemoPage: React.FC = () => {
  const [formHtml, setFormHtml] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    company: '',
    message: '',
  });

  useEffect(() => {
    const formElement = document.getElementById("payment_post") as HTMLFormElement;
    if (formElement) formElement.submit();
  }, [formHtml]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();

  //   const { name, email, mobile, company, message } = formData;
  //   if (!name || !email || !mobile || !company || !message) {
  //     alert("Please fill all required fields.");
  //     return;
  //   }

  //   setIsSubmitting(true);

  //   try {
  //     const response = await axios.post("http://localhost:4000/get-payment", {
  //       amount: predefinedPrice,
  //       product: {
  //         title: "Custom Product",
  //         price: predefinedPrice,
  //       },
  //       firstname: name,
  //       email,
  //       mobile,
  //       company,
  //       message,
  //     });

  //     setFormHtml(response.data);
  //     setSubmitted(true);

  //     // Reset the form after a short delay
  //     setTimeout(() => {
  //       setFormData({
  //         name: '',
  //         email: '',
  //         mobile: '',
  //         company: '',
  //         message: '',
  //       });
  //       setSubmitted(false);
  //     }, 3000);
  //   } catch (error: any) {
  //     alert(error.response?.data?.msg || error.message);
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };
   const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const { name, email, mobile, company, message } = formData;
  if (!name || !email || !mobile || !company || !message) {
    alert("Please fill all required fields.");
    return;
  }

  setIsSubmitting(true);

  try {
    const response = await axios.post("http://localhost:4000/get-payment", {
      amount: predefinedPrice,
      product: {
        title: "Custom Product",
        price: predefinedPrice,
      },
      firstname: name,
      email,
      mobile,
      company,
      message,
      surl: "http://localhost:3000/payment", // Success URL
      furl: "http://localhost:3000/payment", // Failure URL
    });

    setFormHtml(response.data);
    setSubmitted(true);
  } catch (error: any) {
    alert(error.response?.data?.msg || error.message);
  } finally {
    setIsSubmitting(false);
  }
};
  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-xl mx-auto mt-10">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Book a Free Consultation</h3>

      {/* Render payment form HTML if available */}
      {formHtml && (
        <div
          dangerouslySetInnerHTML={{ __html: formHtml }}
          className="mb-4 border p-3 rounded"
        />
      )}

      {/* Show thank you message or form */}
      {submitted ? (
        <div className="bg-blue-50 border border-blue-200 rounded-md p-3 text-blue-800 text-sm">
  <h4 className="font-semibold mb-1">Please wait...</h4>
  <p>You are being redirected to the payment page. Do not refresh or close this window.</p>
</div>

      ) : (
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
            {[
              { label: "Full Name*", name: "name", type: "text" },
              { label: "Business Email*", name: "email", type: "email" },
              { label: "Phone Number*", name: "mobile", type: "tel" },
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
          </div>

          <div className="mb-3">
            <label className="block text-xs font-medium text-gray-700 mb-1" htmlFor="message">
              How can we help you?
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <p className="text-sm font-medium text-gray-700 mb-2">Price: ₹{predefinedPrice}</p>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-2 rounded text-white font-medium transition ${
              isSubmitting ? "bg-gray-500" : "bg-black hover:bg-gray-800"
            }`}
          >
            {isSubmitting ? "Processing..." : "Request Demo"}
          </button>

          <p className="text-[10px] text-gray-400 mt-3 text-center">
            By submitting, you agree to our Privacy Policy. We'll use your info to respond and may process it as described.
          </p>
        </form>
      )}
    </div>
  );
};

export default RequestDemoPage;
