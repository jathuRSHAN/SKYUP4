import React from "react";
import "./ContactUs.css";
import NewsletterSection from "../team/NewsletterSection";

export default function ContactUs() {
  return (
    <>
      {/* Upper Banner */}
      <div className="banner">
        <div className="banner-text">
          <h1>HOME / CONTACT US</h1>
          <h2>Contact Us</h2>
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact-container">
        {/* Left Section: Google Map */}
        <div className="contact-map">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14144460.274317408!2d77.23732899999999!3d28.64480000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb5e9610c9b5%3A0x2a9b10c58047e7f5!2sNepal!5e0!3m2!1sen!2s!4v1690000000000"
            width="100%"
            height="100%"
            style={{ border: "none" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Right Section: Contact Form */}
        <div className="contact-form">
          <h2>Contact us</h2>
          <p>We're open for any suggestion or just to have a chat</p>

          <div className="contact-info">
          <p style={{ marginBottom: "5px" }}>
  <strong>ADDRESS:</strong>198 West 21th Street,<br />Suite 721,<br />New York, NY 10016</p>
            <p><strong>EMAIL:</strong> info@yoursite.com</p>
            <p><strong>PHONE:</strong> +1235 2355 98</p>
          </div>

          <form>
            <div className="input-row">
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
            </div>
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Create a message here..." rows="5" required></textarea>
            <button type="submit">SEND MESSAGE</button>
          </form>

          {/* Social Links */}
          <div className="contact-social">
            <p>Follow us here</p>
            <a href="#">FACEBOOK</a>
            <a href="#">TWITTER</a>
            <a href="#">INSTAGRAM</a>
            <a href="#">DRIBBBLE</a>
          </div>
        </div>
      </div>


      {/* Newsletter Section Below the Contact form */}
            <NewsletterSection />
    </>

  );
}