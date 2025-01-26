import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessageSent(true);
    setTimeout(() => setMessageSent(false), 3000); 
  };

  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            required
            className="input-field"
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email"
            required
            className="input-field"
          />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Message"
            required
            className="input-field"
          ></textarea>
        </div>
        <button type="submit" className="submit-btn">
          Send Message
        </button>
      </form>

      {messageSent && (
        <div className="message-sent">
          <p>Your message has been sent!</p>
        </div>
      )}
    </div>
  );
}

export default Contact;



