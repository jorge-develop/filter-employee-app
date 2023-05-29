import React from "react";
import "../styles/SearchBar.css";
const SearchBar = ({ setSearchTerm, setGenderFilter }) => {
  const handleInputChange = e => {
    setSearchTerm(e.target.value);
    if (!e.target.value.length) {
      setGenderFilter("");
    }
  };

  const handleFilterClick = gender => {
    setGenderFilter(gender);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="first or last name..."
        onChange={handleInputChange}
        className="search-input"
      />
      <button
        onClick={() => handleFilterClick("female")}
        className="search-button"
      >
        Female Employees
      </button>
      <button
        onClick={() => handleFilterClick("male")}
        className="search-button"
      >
        Male Employees
      </button>
    </div>
  );
};

export default SearchBar;
