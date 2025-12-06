// src/pages/Contact.jsx
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contact.css";

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    // ✅ Add time into hidden field
    formRef.current.time.value = new Date().toLocaleString();

    emailjs
      .sendForm(
        "service_unag73v",        // Your EmailJS service ID
        "template_plygkm8",      // Your template ID
        formRef.current,
        "4_cFC3o47QZp9ovlb"      // Your public key
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          formRef.current.reset();
        },
        () => {
          setStatus("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section className="contact-section" id="contact">

      {/* Header */}
      <div className="contact-header">
        <h2 className="contact-title">Contact</h2>
        <p className="contact-subtitle">
          Feel free to reach out for opportunities, collaborations, or just to say hi.
        </p>
      </div>

      {/* GRID */}
      <div className="contact-grid fade-in-up">

        {/* LEFT — CONTACT DETAILS */}
        <div className="contact-card premium-card contact-details-card">

          <div className="details-header">
            <div className="details-icon">📨</div>
            <h3>Contact Details</h3>
          </div>

          <div className="details-list">
            <p><span>Email:</span> akashpandit3052@gmail.com</p>
            <p><span>Phone:</span> +91-8550959295</p>
            <p><span>Location:</span> Pune, Maharashtra, India</p>
          </div>

          <div className="contact-social-buttons">
            <a
              href="https://www.linkedin.com/in/akash-pandit-aa987b1aa/"
              target="_blank"
              className="social-btn linkedin"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/Akashpandit01"
              target="_blank"
              className="social-btn github"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* RIGHT — MESSAGE FORM */}
        <div className="contact-card premium-card">

          <h3 className="contact-form-title">Send a Message</h3>

          <form ref={formRef} onSubmit={handleSubmit}>

            {/* hidden time field for EmailJS */}
            <input type="hidden" name="time" />

            <div className="input-group">
              <input type="text" name="user_name" required />
              <label>Name</label>
            </div>

            <div className="input-group">
              <input type="email" name="user_email" required />
              <label>Email</label>
            </div>

            <div className="input-group">
              <textarea name="message" rows="4" required></textarea>
              <label>Message</label>
            </div>

            <button type="submit" className="btn-send">Send Message</button>
          </form>

          {status && <p className="status-message">{status}</p>}
        </div>

      </div>
    </section>
  );
}
