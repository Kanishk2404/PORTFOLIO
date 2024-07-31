import React, { useState, useEffect } from 'react';
import './Loader.css';

const Loader = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount >= 100) {
          clearInterval(interval);
          document.body.classList.add('loading-complete'); // Add class here
          return 100;
        }
        return prevCount + 1;
      });
    }, 20);
  }, []);

  return (
    <div className="loader-overlay">
      <div className="loader-content">
        <img src="/src/assets/Loader_pic.jpeg" alt="Loading..." className="anime-character" />
        <div className="count">{count}%</div>
      </div>
    </div>
  );
};

export default Loader;
