import React, { useState } from "react";
// import { Link } from "react-router-dom";


const DropdownMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Growth & Freelance");

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <div className="dropdown">
            <button className="dropdown-toggle" onClick={toggleDropdown}>
                {selectedOption}
                <span className="dropdown-arrow">{isOpen ? "▲" : "▼"}</span>
            </button>
            {isOpen && (
                <ul className="dropdown-menu">
                    {/* <Link to="course"><li onClick={() => handleOptionClick("cources")}>Courses</li></Link>
                    <Link to=""><li onClick={() => handleOptionClick("platform")}>Platform</li></Link>
                    <Link to=""><li onClick={() => handleOptionClick("tools")}>Tools</li></Link> */}

                    <a href='./course'><li onClick={() => handleOptionClick("cources")}>Courses</li></a>
                    <a href='./'><li onClick={() => handleOptionClick("platform")}>Platform</li></a>
                    <a href='./'><li onClick={() => handleOptionClick("tools")}>Tools</li></a>
                </ul>
            )}
        </div>
    );
};

export default DropdownMenu;
