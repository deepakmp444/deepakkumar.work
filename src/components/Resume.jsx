import { useContext } from "react";
import { SidebarContextApi } from "../context/MenuContext";

function Resume() {
  const { isOpen, setIsOpen } = useContext(SidebarContextApi);
  return (
    <>
      <div className="d-flex justify-content-between desktop-responsive">
        {isOpen === false ? (
          <div
            className="btnc-menu text-center desktop-responsive"
            style={{ cursor: "pointer", marginTop: "20px", marginLeft: "20px" }}
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              className="bi bi-list text-white"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
        ) : null}

        <div className="btnc" style={{ cursor: "pointer" }}>
          <p
            className="btnwhite center addFont"
            style={{ marginTop: "5px", cursor: "pointer" }}
          >
            Resume
          </p>
        </div>
      </div>
      <div className="d-flex justify-content-end mobile-responsive">
        <div className="btnc" style={{ cursor: "pointer" }}>
          <p
            className="btnwhite center addFont"
            style={{ marginTop: "5px", cursor: "pointer" }}
          >
            Resume
          </p>
        </div>
      </div>
    </>
  );
}

export default Resume;
