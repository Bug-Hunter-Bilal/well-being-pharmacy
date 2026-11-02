
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle
} from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    // Display a demo success message
    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  }

  return (
    <section className="contact-page">

      {/* Contact Heading */}
      <div className="contact-heading">
        <span>GET IN TOUCH</span>
        <h1>Contact Us</h1>
        <p>
          Have a question about our demo store?
          We'd be happy to hear from you.
        </p>
      </div>

      <div className="contact-layout">

        {/* Contact Information */}
        <div className="contact-information">
          <h2>Let's Connect</h2>

          <p className="contact-intro">
            Reach out to us using the contact information
            or send a message through the form.
          </p>

          <div className="contact-info-item">
            <div className="contact-info-icon">
              <Mail size={21} />
            </div>

            <div>
              <h3>Email</h3>
              <p>support@wellbeing.demo</p>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="contact-info-icon">
              <Phone size={21} />
            </div>

            <div>
              <h3>Phone</h3>
              <p>Demo contact information</p>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="contact-info-icon">
              <MapPin size={21} />
            </div>

            <div>
              <h3>Location</h3>
              <p>Pakistan</p>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="contact-info-icon">
              <Clock size={21} />
            </div>

            <div>
              <h3>Working Hours</h3>
              <p>Monday – Saturday</p>
              <p>9:00 AM – 6:00 PM</p>
            </div>
          </div>

        </div>

        {/* Contact Form */}
        <div className="contact-form-container">
          <h2>Send Us a Message</h2>

          {submitted && (
            <div className="contact-success">
              <CheckCircle size={19} />
              Thank you! Your demo message has been submitted.
            </div>
          )}

          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <label htmlFor="contact-name">Full Name</label>

              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-email">Email Address</label>

              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-subject">Subject</label>

              <input
                id="contact-subject"
                type="text"
                name="subject"
                placeholder="Enter message subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-message">Message</label>

              <textarea
                id="contact-message"
                name="message"
                rows="5"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="contact-submit-btn">
              Send Message
              <Send size={17} />
            </button>

            <p className="contact-demo-note">
              This is a frontend demonstration. Messages are
              not sent to an email address or stored on a server.
            </p>

          </form>
        </div>

      </div>
    </section>
  );
}

export default Contact;
