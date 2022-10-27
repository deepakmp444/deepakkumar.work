import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="d-flex justify-content-evenly text-white fixed-bottom mb-5">
      <div>
        <h5 className="fromLeft">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
        </h5>
      </div>
      <div>
        <h5 className="fromLeft">
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
        </h5>
      </div>
      <div>
        <NavLink to="/skill" className="nav-link">
          <h5 className="fromLeft">Skill</h5>
        </NavLink>
      </div>
      <div>
        <NavLink to="/experience" className="nav-link">
          <h5 className="fromLeft">Experience</h5>
        </NavLink>
      </div>
      <div>
        <NavLink to="/project" className="nav-link">
          <h5 className="fromLeft">Project</h5>
        </NavLink>
      </div>
      <div>
        <NavLink to="/education" className="nav-link">
          <h5 className="fromLeft">Education</h5>
        </NavLink>
      </div>
      <div>
        <NavLink to="/hobby" className="nav-link">
          <h5 className="fromLeft">Hobby</h5>
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
