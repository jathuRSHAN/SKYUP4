import React, { useState } from "react";

const SearchComponent = ({ data }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredData = data.filter((item) =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="search-container">
            <input
                type="text"
                className="search-input"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearch}
            />
            {searchTerm && (
                <ul className="search-results">
                    {filteredData.length > 0 ? (
                        filteredData.map((item, index) => (
                            <li key={index} className="search-item">
                                {item}
                            </li>
                        ))
                    ) : (
                        <li className="search-item no-results">No results found</li>
                    )}
                </ul>
            )}
        </div>
    );
};

export default SearchComponent;
