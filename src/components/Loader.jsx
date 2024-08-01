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
        <img src="https://64.media.tumblr.com/a4e6d07f4a448b3eb92585463baef425/68c9f2d62f7474c7-95/s1280x1920/8aa56dfca2eb93ef9159898a215b1dbc5b2ba135.jpg" alt="Loading..." className="anime-character" />
        <div className="count">{count}%</div>
      </div>
    </div>
  );
};

export default Loader;
