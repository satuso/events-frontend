import React from "react";
import { NavLink } from "react-router-dom";

const Nav = ({ setFilter }) => {
  const handleClick = () => {
    setFilter("");
  };
  
  return (
    <div className='nav'>
      <div className="nav-links">
        <NavLink onClick={handleClick} to='/events' className={({ isActive }) => (isActive ? "nav-link active" : "nav-link inactive")}>
          <span>Tapahtumat</span>
        </NavLink>
        <NavLink onClick={handleClick} to='/places' className={({ isActive }) => (isActive ? "nav-link active" : "nav-link inactive")}>
          <span>Paikat</span>
        </NavLink>
        <NavLink onClick={handleClick} to='/activities' className={({ isActive }) => (isActive ? "nav-link active" : "nav-link inactive")}>
          <span>Aktiviteetit</span>
        </NavLink>
      </div>
    </div>
  );
};
export default Nav;