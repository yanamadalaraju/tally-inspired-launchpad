import React from 'react';
import './GrowthSection.css';

interface GrowthSectionProps {
  imageUrl: string;
}

const GrowthSection: React.FC<GrowthSectionProps> = ({ imageUrl }) => {
  const handleClick = () => {
    const formSection = document.getElementById('formSection');
    if (formSection) {
      const offsetTop = formSection.offsetTop; // Get the top position of the form
      const offset = 80; // Adjust this value to your header height or preferred offset

      window.scrollTo({
        top: offsetTop - offset, // Subtract the offset so the form is fully visible
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="growth-section">
      <div className="growth-image">
        <img src={imageUrl} alt="Business Growth" />
      </div>

      <div className="growth-content">
        <h2 className="growth-title">
          The key to <span>successful business growth</span> is Engagement.
        </h2>
        <p className="growth-description">
          Growth isn't just about numbers — it's about connection. Businesses that <strong>engage meaningfully</strong> with their audience build loyalty, foster innovation, and create long-lasting value.
        </p>
        <ul className="growth-list">
          <li>Boost brand trust and visibility</li>
          <li>Drive customer retention and satisfaction</li>
          <li>Fuel referrals and organic growth</li>
        </ul>
        <button className="growth-button" onClick={handleClick}>
          ✳ Let’s Grow Together
        </button>
      </div>
    </section>
  );
};

export default GrowthSection;
