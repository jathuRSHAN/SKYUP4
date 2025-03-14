import React from "react";
import "./Career.css";
import Openings from "./Openings";
import NewsletterSection from "../team/NewsletterSection";

export default function Career() {
 
  const scrollToOpenings = () => {
    const openingsSection = document.getElementById("openings-section");
    if (openingsSection) {
      openingsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Upper Banner */}
      <div className="banner">
        <div className="banner-text">
          <h1>HOME / CAREER</h1>
          <h2>WE ARE HIRING</h2>
          <button className="view-openings-btn" onClick={scrollToOpenings}>
            View Openings
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="content-container">
        {/* Image Section */}
        <div className="image-container">
          <img src="/images/team1.jpg" alt="Team 1" className="team-image" />
          <img src="/images/team2.jpg" alt="Team 2" className="team-image" />
          <img src="/images/team3.jpg" alt="Team 3" className="team-image" />
        </div>

        {/* Text Section */}
        <div className="text-container">
          <p>
           At <strong>SkyUp,</strong> we are passionate about empowering individuals with the skills to succeed in the digital marketplace. 
          </p>
          <p>
          As a leading online freelancing course platform, we provide high-quality training in Fiverr, WordPress Website Design, and Graphic Design, helping learners achieve their career goals.

With a growing global presence, we are expanding our team to drive innovation in online education.
          </p>
          <p>
          If you’re looking to be part of a dynamic and purpose-driven organization, explore our opportunities and grow with us!
          </p>
        </div>
      </div>

      {/* Open Vacancies Section */}
      <div id="openings-section">
        <Openings />
         <NewsletterSection />

      </div>
    </>
  );
}
