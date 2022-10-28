import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="d-flex justify-content-evenly mobile-responsive flex-nowrap text-white fixed-bottom mb-5">
      <div>
        <NavLink to="/" className="addFont  link cool-link">
          Home
        </NavLink>
      </div>
      <div>
        <NavLink to="/about" className="addFont  link cool-link">
          About
        </NavLink>
      </div>
      <div>
        <NavLink to="/skill" className="addFont  link cool-link">
          Skill
        </NavLink>
      </div>
      <div>
        <NavLink to="/experience" className="addFont  link cool-link">
          Experience
        </NavLink>
      </div>
      <div>
        <NavLink to="/project" className="addFont  link cool-link">
          Project
        </NavLink>
      </div>
      <div>
        <NavLink to="/education" className="addFont  link cool-link">
          Education
        </NavLink>
      </div>
      <div>
        <NavLink to="/hobby" className="addFont  link cool-link">
          Hobby
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
