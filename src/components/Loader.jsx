import React, { useState, useEffect } from 'react';
import './Loader.css';

const Loader = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => {
        if (prevCount < 100) {
          return prevCount + 1;
        } else {
          return 100;
        }
      });
    }, 50); // Adjust the speed of the countdown

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loader-overlay">
      <div className="loader">
        <div className="countdown">{count}%</div>
      </div>
    </div>
  );
};

export default Loader;
