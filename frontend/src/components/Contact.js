import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../design/ContactDesign.css';

const Contact = ({ handleClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_jwa8b1h', 'template_d7wzq1f', e.target, 'klg4LshCgMYCvRrNq')
      .then((result) => {
        alert('Message sent successfully!');
        handleClose();
      })
      .catch((error) => {
        alert('An error occurred, please try again.');
      });
    e.target.reset();
  };

  return (
    <div className="contact-form-container">
      <button className="close-button" onClick={handleClose}>&times;</button>
      <h2 className="contact-title">Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group-custom">
          <label className="form-label" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-input"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group-custom">
          <label className="form-label" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-input"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group-custom">
          <label className="form-label" htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            className="form-input"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">Send</button>
      </form>
    </div>
  );
};

export default Contact;
