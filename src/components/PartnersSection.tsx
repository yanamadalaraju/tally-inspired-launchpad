import React from 'react';
import partner1 from '@/assets/gttechnology.png';
import partner2 from '@/assets/Abound.png';
import partner3 from '@/assets/Excel.png';
import partner4 from '@/assets/pcd.jpeg';
import partner5 from '@/assets/sreetulasi.jpeg';
import partner6 from '@/assets/jvc.png';
import partner7 from '@/assets/cbd.png';
import partner8 from '@/assets/abram.png';
import '../components/PartnerSection.css';

const PartnersSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-24 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Trusted by Leading Brands</h2>
        <div className="partners-container">
          <div className="partners-scroll mt-10">
            {/* Partner Logos - First Set */}
            <div className="partner-item">
              <img src={partner1} alt="Partner 1" className="h-16" />
            </div>
            <div className="partner-item">
              <img src={partner2} alt="Partner 2" className="h-16" />
            </div>
            <div className="partner-item">
              <img src={partner3} alt="Partner 3" className="h-16" />
            </div>
            <div className="partner-item">
              <img src={partner4} alt="Partner 4" className="h-16" />
            </div>
            <div className="partner-item">
              <img src={partner5} alt="Partner 5" className="h-16" />
            </div>
            <div className="partner-item">
              <img src={partner6} alt="Partner 5" className="h-16" />
            </div>
            <div className="partner-item">
              <img src={partner7} alt="Partner 5" className="h-16" />
            </div>
            <div className="partner-item">
              <img src={partner8} alt="Partner 5" className="h-16" />
            </div>
            
            {/* Partner Logos - Second Set (Duplicate) */}
            <div className="partner-item">
              <img src={partner1} alt="Partner 1" className="h-16" />
            </div>
            <div className="partner-item">
              <img src={partner2} alt="Partner 2" className="h-16" />
            </div>
            <div className="partner-item">
              <img src={partner3} alt="Partner 3" className="h-16" />
            </div>
            <div className="partner-item">
              <img src={partner4} alt="Partner 4" className="h-16" />
            </div>
            <div className="partner-item">
              <img src={partner5} alt="Partner 5" className="h-16" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;