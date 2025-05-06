import React from 'react';

const FAQSection = () => {
  return (
    <div className="bg-white p-3 rounded-lg shadow-lg mt-4">
      <h3 className="text-base font-semibold text-primary mb-2">Frequently Asked Questions</h3>
      <div className="space-y-2">
        <div>
          <h4 className="font-semibold text-primary text-xs">How do I register for the webinar?</h4>
          <p className="text-gray-600 text-xs">Simply click the "Register Now" button on the webinar page to secure your spot.</p>
        </div>
        <div>
          <h4 className="font-semibold text-primary text-xs">Will the webinar be recorded?</h4>
          <p className="text-gray-600 text-xs">Yes, you will receive a recording of the session even if you cannot attend live.</p>
        </div>
        <div>
          <h4 className="font-semibold text-primary text-xs">Can I ask questions during the webinar?</h4>
          <p className="text-gray-600 text-xs">Yes, there will be a live Q&A session where you can ask questions to our expert presenters.</p>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
