import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { SidebarContextApi } from "../context/MenuContext";

function Sidebar() {
  const { isOpen, setIsOpen } = useContext(SidebarContextApi);
  return (
    <>
      {isOpen && (
        <div className="sidebarWidth">
          <div
            className="btnc-menu text-center"
            style={{
              cursor: "pointer",
              marginTop: "20px",
              marginLeft: "20px",
            }}
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-x-lg text-white mt-1"
              viewBox="0 0 16 16"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
            </svg>
          </div>
          <div className="bg-sidebar-text p-2" style={{ marginTop: "40px" }}>
            <div className="addFont" style={{ marginLeft: "10px" }}>
              <NavLink
                to="/"
                className="link"
                onClick={() => setIsOpen(!isOpen)}
              >
                Home
              </NavLink>
            </div>
          </div>
          <div className="bg-sidebar-text p-2 mt-4">
            <div className="addFont" style={{ marginLeft: "10px" }}>
              <NavLink
                to="/about"
                className="link"
                onClick={() => setIsOpen(!isOpen)}
              >
                About
              </NavLink>
            </div>
          </div>
          <div className="bg-sidebar-text p-2 mt-4">
            <div className="addFont" style={{ marginLeft: "10px" }}>
              <NavLink
                to="/skill"
                className="link"
                onClick={() => setIsOpen(!isOpen)}
              >
                Skill
              </NavLink>
            </div>
          </div>
          <div className="bg-sidebar-text p-2 mt-4">
            <div className="addFont" style={{ marginLeft: "10px" }}>
              <NavLink
                to="/experience"
                className="link"
                onClick={() => setIsOpen(!isOpen)}
              >
                Experience
              </NavLink>
            </div>
          </div>
          <div className="bg-sidebar-text p-2 mt-4">
            <div className="addFont" style={{ marginLeft: "10px" }}>
              <NavLink
                to="/project"
                className="link"
                onClick={() => setIsOpen(!isOpen)}
              >
                Project
              </NavLink>
            </div>
          </div>
          <div className="bg-sidebar-text p-2 mt-4">
            <div className="addFont" style={{ marginLeft: "10px" }}>
              <NavLink
                to="/education"
                className="link"
                onClick={() => setIsOpen(!isOpen)}
              >
                Education
              </NavLink>
            </div>
          </div>
          <div className="bg-sidebar-text p-2 mt-4">
            <div className="addFont" style={{ marginLeft: "10px" }}>
              <NavLink
                to="/hobby"
                className="link"
                onClick={() => setIsOpen(!isOpen)}
              >
                Hobby
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Sidebar;
