import React from 'react';
import './HeroSectionss.css';

const HeroSectionss = () => {
  return (
    <div className="hero-section">
      <div className="overlay">
        <h1>
          Ditch the Desk 🌴 <span className="strike">Not the Deals ❌</span>
        </h1>
        <p>
          Run your Entire Business from Anywhere with our Cloud-based{' '}
          <span className="highlight">Virtual Phone System</span>
        </p>
        <button className="trial-btn">Start Free Trial</button>
        <p className="note">No credit card required*</p>
      </div>
    </div>
  );
};

export default HeroSectionss;
