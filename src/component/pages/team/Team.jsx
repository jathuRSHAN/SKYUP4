import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";
import "./Team.css";
import NewsletterSection from "./NewsletterSection"; // Corrected import path

const teamMembers = [
  { name: "Arthur MaGregor", role: "Developer and Lead Instructor", img: "/images/member4.jpg" },
  { name: "Sophia Bennett", role: "UI/UX Designer", img: "/images/member2.jpg" },
  { name: "Michael Smith", role: "Backend Developer", img: "/images/member3.jpg" },
  { name: "Emily Johnson", role: "Frontend Developer", img: "/images/member1.jpg" },
  { name: "Olivia Williams", role: "Project Manager", img: "/images/member5.jpg" },
  { name: "Emma Brown", role: "QA Engineer", img: "/images/member6.jpg" },
  { name: "James Davis", role: "Marketing Strategist", img: "/images/member7.jpg" },
  { name: "Jenny Wilson", role: "Cybersecurity Analyst", img: "/images/member8.jpg" },
];

export default function Team() {
  return (
    <>
      {/* Upper Banner */}
      <div className="banner">
        <div className="banner-text">
          <h1>HOME / TEAM</h1>
          <h2>Team</h2>
        </div>
      </div>

      {/* Team Section */}
      <section className="team-container">
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-img-container">
                <img src={member.img} alt={member.name} className="team-img" />
                <div className="social-icons">
                  <FaFacebook className="icon" />
                  <FaTwitter className="icon" />
                  <FaInstagram className="icon" />
                  <FaTiktok className="icon" />
                </div>
              </div>
              <div className="team-info">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section Below the Team */}
      <NewsletterSection />
    </>
  );
}
