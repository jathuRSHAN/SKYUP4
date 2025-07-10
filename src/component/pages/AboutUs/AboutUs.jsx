import React from "react";
import "./aboutUs.css";
import AboutUsImg from "../../../asset/AboutUs.png"
import Team from "../team/Team";
import qrImg from "../../../asset/qr.png"
const AboutUs = () => {
    return (
        <>

            <div className="banner3">
                <div className="banner-text3">
                    <h2>About SkyUp (Pvt) Ltd</h2>
                    <h3>SkyUp (PVT) LTD is dedicated to empowering the next generation of digital professionals. Our core mission is to provide comprehensive freelancing courses and hands-on training sessions that equip students with the skills needed to thrive in today’s online job market. We believe in creating real opportunities for individuals to build successful and sustainable online careers.
                        Beyond education, SkyUp also offers a range of professional services in the fields of software development, IT solutions, digital marketing, and content creation. Whether you're a student looking to launch your freelancing journey or a business seeking high-quality digital services, SkyUp is your trusted partner for growth, innovation, and success in the digital era.</h3>

                </div>
            </div>

            <div className="about-page">
                {/* 1. About SkyUp */}

                <section className="section about-skyup">
                    <h2>About SkyUp Campus</h2>
                    <div className="aboutas">
                        <div className="aboutimg">
                            <img src={AboutUsImg} alt="" />
                        </div>

                        <div className="about-desc">
                            <p>
                                <strong>SkyUp Campus</strong> is a leading online education platform based in Sri Lanka,
                                founded with the vision of empowering individuals through freelancing and digital skills.
                                Our mission is to bridge the gap between traditional education and modern industry demands by
                                offering high-quality, job-oriented courses that are affordable, flexible, and accessible to all.
                                <br /><br />
                                Since our founding in 2023, we’ve helped hundreds of students launch successful freelancing careers
                                on platforms like Fiverr, Upwork, and Freelancer through our expert-led courses delivered in Tamil,
                                Sinhala, and English.
                            </p>
                        </div>

                    </div>

                </section>

                {/* 2. Vision & Mission */}
                <section className="section vision-mission">
                    <h2>Our Vision & Mission</h2>
                    <p>
                        <strong>Vision:</strong> To be Sri Lanka’s #1 platform for digital career education and freelancing empowerment.
                        <br />
                        <strong>Mission:</strong> To provide accessible, practical, and certified online education that unlocks global
                        earning opportunities for everyone — regardless of background or language.
                    </p>
                </section>

                {/* 3. CEO Message */}
                <section className="section ceo-message">
                    <h2>Message from Our CEO – Sanju</h2>
                    <div className="ceo-content">
                        <img src=" /images/member1.png" alt="Sanju - CEO of SkyUp" className="ceo-photo" />
                        <div className="ceo-text">
                            <p>
                                "At SkyUp, our goal is not just to teach – it’s to transform lives. We believe everyone deserves
                                a chance to grow and earn through skills. Our team is dedicated to making your freelance journey
                                smooth, professional, and rewarding. Thank you for trusting SkyUp — let’s level up together!"
                            </p>
                            <video controls width="320">
                                <source src="/images/member1.png" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </section>

                {/* 4. Our Team */}
                <section className="section team">
                    <h2>Meet Our Team</h2>
                    <Team />
                </section>

                {/* 5. Legal + Achievements */}
                <section className="section legal-achievements">
                    <h2>Legal Registration & Achievements</h2>
                    <p>
                        SkyUp (Pvt) Ltd is a legally registered educational services company in Sri Lanka.
                        <br /><br />
                        📄 <strong>Registration Number:</strong> PV00324796 <br />
                        <img src={qrImg} alt="" /><br />
                        🏆 <strong>Milestones:</strong>
                        <ul>
                            <li>✔ Trained 500+ freelancers within the first year</li>
                            <li>✔ Partnered with 20+ local institutions</li>
                            <li>✔ Achieved 4.9⭐ rating across all platforms</li>
                        </ul>
                    </p>
                </section>
            </div>
        </>
    );
};

export default AboutUs;
