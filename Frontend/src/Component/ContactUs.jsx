import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import '../Css/ContactUs.css';

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && message) {
      alert("Thank you for contacting us. We will get back to you shortly!");
      // Submit the form or make an API call here
      setName("");
      setEmail("");
      setMessage("");
    } else {
      setError("All fields are required.");
    }
  };

  return (
    <div className="contact-page">
      <h1 className="contact-heading">Contact Us</h1>
      <div className="contact-container">
        <div className="contact-form">
          <h2>Get in Touch</h2>
          {error && <p className="error-message">{error}</p>}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>

        <div className="contact-info">
          <h2>Contact Information</h2>
          <p><FaPhoneAlt /> Phone: 1800-123-4567</p>
          <p><FaEnvelope /> Email: support@reliance.com</p>
          <p><FaMapMarkerAlt /> Address: Reliance Corporate Park, Navi Mumbai, India</p>
          <div className="social-links">
            <a href="https://www.facebook.com/reliance" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={30} />
            </a>
            <a href="https://twitter.com/reliance" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={30} />
            </a>
            <a href="https://www.linkedin.com/company/reliance" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
