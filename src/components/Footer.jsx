// src/components/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Kanishk. All rights reserved.</p>
      <p>
        Follow me on:
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"> GitHub</a> |
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"> LinkedIn</a> |
        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer"> Twitter</a>
      </p>
    </footer>
  );
};

export default Footer;
