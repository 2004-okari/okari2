import React, { useState, useEffect } from 'react';
import '../Styles/LoadingScreen.css';

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loading-screen ${loading ? 'active' : ''}`}>
      <div className="loading-animation">
        {/* Your loading animation goes here */}
      </div>
      <div className="loading-text">
        Loading...
        {' '}
        <br />
        Okari Nyandika
      </div>
    </div>
  );
};

export default LoadingScreen;
