import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";
import "./Team.css";

const teamMembers = [
  { name: "Dr. Adrian Molises", role: "Lead Developer", img: "/images/member1.jpg" },
  { name: "Dr. Arthur MaGregor", role: "Project Manager", img: "/images/member2.jpg" },
  { name: "Dr. Anna Hanzen", role: "Software Engineer", img: "/images/member3.jpg" },
  { name: "Dr. Brian Wooden", role: "UI/UX Designer", img: "/images/member4.jpg" }
];

export default function Team() {
  return (
    <section className="team-page">
      {/* Top Section with Background Image */}
      <div className="team-banner">
        <div className="overlay">
          <p>HOME / TEAM</p>
          <h1>Team</h1>
        </div>
      </div>

      {/* Bottom Section with Team Cards */}
      <div className="team-container">
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-img-container">
                <img src={member.img} alt={member.name} className="team-img" />
              </div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <div className="social-icons">
                <FaFacebook className="icon" />
                <FaTwitter className="icon" />
                <FaInstagram className="icon" />
                <FaTiktok className="icon" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
