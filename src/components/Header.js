import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";

const Header = ({ setFilter }) => {
  const [small, setSmall] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset > 100)
      );
    }
  }, []);

  return (
    <>
      <div className={small ? "header small-header" : "header"}>
        <Link to="*" className="header-link"><h1>Helsinki Events</h1></Link>
      </div>
      <Nav 
        setFilter={setFilter}
        setSmall={setSmall}
        small={small}
      />
    </>
  );
};

export default Header;