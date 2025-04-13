import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container" style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" className="btn btn-primary" style={{ marginTop: '20px', display: 'inline-block' }}>
        Back to Dashboard
      </Link>
    </div>
  );
};

export default NotFound;