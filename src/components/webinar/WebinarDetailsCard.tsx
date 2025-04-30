
import React from 'react';
import { Calendar, Clock, BarChart2 } from 'lucide-react';

const WebinarDetailsCard = () => {
  return (
    <div className="bg-primary/5 rounded-lg p-6 mb-8 border border-primary/10 shadow-sm">
      <div className="flex items-start mb-4">
        <Calendar className="h-5 w-5 text-secondary mr-3 mt-1" />
        <div>
          <h4 className="font-semibold text-primary">Next Webinar Date</h4>
          <p>Thursday, May 15th, 2025 at 11:00 AM EST</p>
        </div>
      </div>
      <div className="flex items-start mb-4">
        <Clock className="h-5 w-5 text-secondary mr-3 mt-1" />
        <div>
          <h4 className="font-semibold text-primary">Duration</h4>
          <p>45 minutes + 15 minutes Q&A session</p>
        </div>
      </div>
      <div className="flex items-start">
        <BarChart2 className="h-5 w-5 text-secondary mr-3 mt-1" />
        <div>
          <h4 className="font-semibold text-primary">Expert Presenters</h4>
          <p>Industry specialists with over 15 years of experience</p>
        </div>
      </div>
    </div>
  );
};

export default WebinarDetailsCard;
