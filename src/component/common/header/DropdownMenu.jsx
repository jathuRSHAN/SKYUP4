import React, { useState } from "react";


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

    const openDropdown = () => {
        setIsOpen(true);
    };

    const closeDropdown = () => {
        setIsOpen(false);
    };

    return (
        <div
            className="dropdown"
            onMouseEnter={openDropdown}
            onMouseLeave={closeDropdown}
        >
            <button className="dropdown-toggle" onClick={toggleDropdown}>
                {selectedOption}
                <span className="dropdown-arrow">{isOpen ? "▲" : "▼"}</span>
            </button>

            {isOpen && (
                <ul className="dropdown-menu">
                    <a href="./course">
                        <li onClick={() => handleOptionClick("Courses")}>Courses</li>
                    </a>
                    <a href="./">
                        <li onClick={() => handleOptionClick("Platform")}>Platform</li>
                    </a>
                    <a href="./">
                        <li onClick={() => handleOptionClick("Tools")}>Tools</li>
                    </a>
                </ul>
            )}
        </div>
    );
};

export default DropdownMenu;
