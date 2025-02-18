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

    return (
        <div className="dropdown">
            <button className="dropdown-toggle" onClick={toggleDropdown}>
                {selectedOption}
                <span className="dropdown-arrow">{isOpen ? "▲" : "▼"}</span>
            </button>
            {isOpen && (
                <ul className="dropdown-menu">
                    <li onClick={() => handleOptionClick("cources")}>Courses</li>
                    <li onClick={() => handleOptionClick("platform")}>Platform</li>
                    <li onClick={() => handleOptionClick("tools")}>Tools</li>
                </ul>
            )}
        </div>
    );
};

export default DropdownMenu;
