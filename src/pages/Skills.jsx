// src/pages/Skills.jsx
import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <div className="skills-page">
      <h2 className="skills-heading">Skills</h2>
      <div className="skills-cards">
        <div className="card">
          <h3>Cyber Security</h3>
          <ul>
            <li>Penetration Testing</li>
            <li>Network Security</li>
            <li>Threat Analysis</li>
          </ul>
        </div>
        <div className="card">
          <h3>Web Development</h3>
          <ul>
            <li>HTML & CSS</li>
            <li>JavaScript & React</li>
            <li>Backend Development</li>
          </ul>
        </div>
        <div className="card">
          <h3>Cloud Computing</h3>
          <ul>
            <li>AWS & Azure</li>
            <li>Infrastructure as Code</li>
            <li>Cloud Security</li>
          </ul>
        </div>
        <div className="card">
          <h3>Digital Marketing</h3>
          <ul>
            <li>SEO & SEM</li>
            <li>Content Marketing</li>
            <li>Social Media Management</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
