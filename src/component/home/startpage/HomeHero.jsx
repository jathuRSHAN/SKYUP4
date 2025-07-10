import React from "react";
import BannerBackground from "../../../asset/home-banner-background.png";
import BannerImage from "../../../asset/home-banner-image.png";
//import Navbar from "./Navbar";
import "./HomeHero.css"
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
    return (
        <div className="home-container">
            {/* <Navbar /> */}
            <div className="home-banner-container">
                <div className="home-bannerImage-container">
                    <img src={BannerBackground} alt="" />
                </div>
                <div className="home-text-section">
                    <h1 className="primary-heading">
                        Turn Your Skills into Success
                    </h1>
                    <p className="primary-text">
                        Learn with <strong>SkyUp</strong> best online education Success doesn't come to you; you have to go to it Enroll now and take charge of your future
                    </p>
                    <button className="secondary-button">
                        Register Today <FiArrowRight />{" "}
                    </button>
                </div>
                <div className="home-image-section">
                    <img src={BannerImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;