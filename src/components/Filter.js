import React, { useState } from "react";

const Filter = ({ setFilter, tags, message, loading }) => {
  const [input, setInput] = useState("");
  
  const filterResults = (e) => {
    e.preventDefault();
    setFilter(input);
    setInput("");
  };

  return (
    <div className="filter">
      <div className="search">
        <form>
          <input
            type="text"
            placeholder="hae"
            onChange={(e) => setInput(e.target.value)}
            value={input}
            onFocus={(e) => e.target.placeholder = ""}
            onBlur={(e) => e.target.placeholder = "hae"}
          />
          <button onClick={filterResults} className="search-button"><i className="fas fa-search"></i></button>
        </form>
      </div>
      <span className='message'>{loading ? "Haetaan tietoja..." : message} <i className={loading ? "fas fa-hourglass-half rotate" : "off"}></i></span>
      <div className="tags center">
        {tags.map(tag => <span onClick={() => {
          setFilter(tag);
        }} className="tag" key={tag}>{tag}</span>)}
      </div>
      <span className="clear-tag" onClick={() => setFilter(null)}>tyhjennä haku</span>
    </div>
  );
};

export default Filter;