import React, { useState } from 'react';
import './Contact.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // ✅ import icons

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({ email: '', phone: '' });
  const [submissionStatus, setSubmissionStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setErrors({ ...errors, email: emailRegex.test(value) ? '' : 'Please enter a valid email address' });
    }

    if (name === 'phone') {
      const phoneRegex = /^\d{10}$/;
      setErrors({ ...errors, phone: phoneRegex.test(value) ? '' : 'Please enter a valid phone number (10 digits)' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!errors.email && !errors.phone) {
      try {
        const response = await fetch('http://localhost:3001/send', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setSubmissionStatus('Message sent successfully!');
          setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        } else {
          setSubmissionStatus('Failed to send message.');
        }
      } catch (error) {
        console.error('Error:', error);
        setSubmissionStatus('Error occurred while sending message.');
      }
    }
  };

  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-column">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" maxLength="20" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your Email" maxLength="50" value={formData.email} onChange={handleChange} required />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" name="phone" placeholder="Your Phone Number" maxLength="10" value={formData.phone} onChange={handleChange} required />
            {errors.phone && <span className="error">{errors.phone}</span>}
          </div>
        </div>
        <div className="form-column">
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <select id="subject" name="subject" value={formData.subject} onChange={handleChange} required>
              <option value="" disabled>Select Subject</option>
              <option value="General Inquiry">General Inquiry</option>
              <option value="Project Proposal">Project Proposal</option>
              <option value="Feedback">Feedback</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Your Message (max 250 words)" maxLength="250" value={formData.message} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <button type="submit">Send</button>
          </div>
        </div>
        {submissionStatus && <div className="submission-status">{submissionStatus}</div>}
      </form>

      {/* 🌐 Social Icons */}
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/kanishk-saraswat/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} />
        </a>
        <a href="https://github.com/Kanishk2404" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} />
        </a>
      </div>
    </div>
  );
};

export default Contact;
