import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import "./NewsletterSection.css";

export default function NewsletterSection() {
  return (
    <>
      {/* Statistics Section */}
      <div className="stats-section">
        <div className="stat-item">
          <img src="/icons/success.png" alt="Success Stories" className="stat-icon" />
          <div className="stat-text">
            <h2>3,000</h2>
            <p>SUCCESS STORIES</p>
          </div>
        </div>
        <div className="stat-item">
          <img src="/icons/tutors.png" alt="Trusted Tutors" className="stat-icon" />
          <div className="stat-text">
            <h2>320</h2>
            <p>TRUSTED TUTORS</p>
          </div>
        </div>
        <div className="stat-item">
          <img src="/icons/schedules.png" alt="Schedules" className="stat-icon" />
          <div className="stat-text">
            <h2>1,000</h2>
            <p>SCHEDULES</p>
          </div>
        </div>
        <div className="stat-item">
          <img src="/icons/courses.png" alt="Courses" className="stat-icon" />
          <div className="stat-text">
            <h2>587</h2>
            <p>COURSES</p>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="newsletter-section">
        <div className="newsletter-content">
          <h2>Newsletter - Stay tune and get the latest update</h2>
          <p>Far far away, behind the word mountains</p>
        </div>
        <div className="newsletter-form">
          <input type="email" placeholder="Enter email address" />
          <button><FaPaperPlane /></button>
        </div>
      </div>
    </>
  );
}
