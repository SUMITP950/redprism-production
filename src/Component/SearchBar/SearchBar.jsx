import { useState } from "react";
// import { FaSearch } from "react-icons/fa";

import "./SearchBar.css";

export const SearchBar = ({ setResults, name }) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          );
        });
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      {/* <FaSearch id="search-icon" /> */}
      <i
        class="feather-search searchicon"
        style={{ color: "gray", fontSize: "15px" }}
      ></i>
      <input
        className="input-search"
        placeholder={name}
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};
