import React, { useState, useEffect, useRef } from "react";
import "./opening.css";

const jobOpenings = [
    { title: "Senior Application Administrator - Software ", location: "Colombo, Sri Lanka", department: "Software Solutions (P1)" },
    { title: "Digital Marketing Strategist – Growth & SEO ", location: "Colombo, Sri Lanka", department: "Remote | Digital Marketing" },
    { title: "Content Creation Specialist – Video & Copywriting (P1)", location: "Jaffna, Sri Lanka ", department: "S| Creative Department" },
    { title: "IT Support Engineer – Systems & Network (P1)", location: "Colombo, Sri Lanka", department: "IT Managed Services" },
    { title: "Freelance Training Coordinator – Online Programs (P2)", location: "Colombo, Sri Lanka", department: "Remote | Training & Education" },
    { title: "Social Media Manager – Branding & Engagement (P1)", location: "Colombo, Sri Lanka", department: "Remote | Marketing & Communications" },
];

const locations = ["Sri Lanka", "Colombo"];
const departments = ["IT Managed Services", "Infrastructure", "Legal", "Security Operations Centre", "Smart Buildings", "Software Engineering"];

const Openings = () => {
    const [selectedLocation, setSelectedLocation] = useState([]);
    const [selectedDepartment, setSelectedDepartment] = useState([]);
    const [showLocationDropdown, setShowLocationDropdown] = useState(false);
    const [showDepartmentDropdown, setShowDepartmentDropdown] = useState(false);

    const locationRef = useRef(null);
    const departmentRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (locationRef.current && !locationRef.current.contains(event.target)) {
                setShowLocationDropdown(false);
            }
            if (departmentRef.current && !departmentRef.current.contains(event.target)) {
                setShowDepartmentDropdown(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const toggleSelection = (type, value) => {
        if (type === "location") {
            setSelectedLocation((prev) => (prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]));
        } else {
            setSelectedDepartment((prev) => (prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]));
        }
    };

    return (
        <div className="openings-container">
            <h1>Our Openings</h1>
            <p className="openings-count">6 Open Positions</p>

            {/* Search Bar Section */}
            <div className="search-bar">
                <input type="text" placeholder="Search by keyword" className="search-input" />

                {/* Location Dropdown */}
                <div className="dropdown" ref={locationRef}>
                    <button className="dropdown-btn" onClick={() => setShowLocationDropdown(!showLocationDropdown)}>
                        <span className={selectedLocation.length > 0 ? "" : "placeholder"}>
                            {selectedLocation.length > 0 ? selectedLocation.join(", ") : "Select Location"}
                        </span>
                    </button>
                    {showLocationDropdown && (
                        <div className="dropdown-content">
                            {locations.map((loc, index) => (
                                <label key={index} className="dropdown-item">
                                    <input type="checkbox" checked={selectedLocation.includes(loc)} onChange={() => toggleSelection("location", loc)} />
                                    {loc}
                                </label>
                            ))}
                        </div>
                    )}
                </div>

                {/* Department Dropdown */}
                <div className="dropdown" ref={departmentRef}>
                    <button className="dropdown-btn" onClick={() => setShowDepartmentDropdown(!showDepartmentDropdown)}>
                        <span className={selectedDepartment.length > 0 ? "" : "placeholder"}>
                            {selectedDepartment.length > 0 ? selectedDepartment.join(", ") : "Select Department"}
                        </span>
                    </button>
                    {showDepartmentDropdown && (
                        <div className="dropdown-content">
                            {departments.map((dept, index) => (
                                <label key={index} className="dropdown-item">
                                    <input type="checkbox" checked={selectedDepartment.includes(dept)} onChange={() => toggleSelection("department", dept)} />
                                    {dept}
                                </label>
                            ))}
                        </div>
                    )}
                </div>

                <button className="search-btn">Search</button>
            </div>

            {/* Job List */}
            <div className="job-list">
                {jobOpenings.map((job, index) => (
                    <div key={index} className="job-card">
                        <div className="job-info">
                            <h3>{job.title}</h3>
                            <p>{job.location} | {job.department}</p>
                        </div>
                        <button className="apply-btn">Apply</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Openings;