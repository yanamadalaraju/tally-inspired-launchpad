import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Welcome to the Payment Tracker</h1>
      <p>Your go-to place to track payments and their statuses.</p>
      <div>
        <Link to="/payment?status=Success&txnid=12345" style={{ marginRight: '20px' }}>
          Check Payment Status
        </Link>
        <Link to="/payments">View All Payments</Link>
      </div>
    </div>
  );
};

export default HomePage;
