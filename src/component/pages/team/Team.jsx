import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";
import "./Team.css";
//import NewsletterSection from "./NewsletterSection"; // Corrected import path

const teamMembers = [
    { name: "Sankaviyan V", role: "Founder/CEO", img: "/images/member1.png" },
    { name: "Jathurshan S", role: "CTO", img: "/images/member2.png" },
    { name: "V sakitha", role: "Human resources manager", img: "/images/member3.png" },
    { name: "Niroj P", role: "junior software engineer", img: "/images/member6.png" },
    { name: "N Thurusthika", role: "Project Manager", img: "/images/member5.png" },
    { name: "Y Dilaxsana ", role: "Marketing Strategist", img: "/images/member7.png" },
    { name: "Wasana Karunasena", role: "Intern software engineer", img: "/images/member8.png" },
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
                                    <FaFacebook className="icons" />
                                    <FaTwitter className="icons" />
                                    <FaInstagram className="icons" />
                                    <FaTiktok className="icons" />
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

            {/* Newsletter Section Below the Team
      <NewsletterSection /> */}
        </>
    );
}