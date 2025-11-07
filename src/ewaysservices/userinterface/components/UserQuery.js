import React from "react";
import "./UserQuery.css";

export default function UserQuery() {
  return (
    <div className="userquery-container">
      {/* LEFT SIDE */}
      <div className="userquery-left">
        <h2>Let’s Talk about</h2>
        <ul>
          <li>We are open to talk</li>
          <li>Joining our team</li>
          <li>General inquiries</li>
        </ul>
      </div>

      {/* RIGHT SIDE */}
      <div className="userquery-right">
        <h2>Got a question? We would love to hear from you.</h2>
        <p>Send us your message, we will respond as soon as possible.</p>

        <form className="userquery-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="fullname">Full Name</label>
              <input id="fullname" type="text" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input id="email" type="email" required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="contact">Contact Number</label>
              <input id="contact" type="tel" required />
            </div>

            <div className="form-group">
              <label htmlFor="company">Company Name</label>
              <input id="company" type="text" required />
            </div>
          </div>

          <div className="form-group full-width">
            <label htmlFor="message">Your Message</label>
            <textarea id="message" rows="4"></textarea>
          </div>

          <div className="checkbox-row">
            <input type="checkbox" id="updates" />
            <label htmlFor="updates">
              I would like to get information about the latest updates.
            </label>
          </div>

          <button type="submit" className="send-btn">
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
}
