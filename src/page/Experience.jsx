import React from "react";
import { motion } from "framer-motion";
function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0, nsition: { duration: 1 } }}
      animate={{ opacity: 1, nsition: { duration: 1 } }}
      exit={{ opacity: 0, nsition: { duration: 1 } }}
      variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
      className="text-white container p-5"
    >
      <h1 className="addFont fontWeight900 heading-color mt-5">
        Paktolus Solution
      </h1>

      <div className="addFont fontWeight500 heading-color">
        <span>Full Time</span> | <span>1 Yr 11 Months</span>
      </div>
      <div className="addFont fontWeight500 heading-color">
        <span className="fontWeight200">Mumbai, Maharashtra, India</span>{" "}
        <span>
          {" "}
          <kbd>Remote</kbd>{" "}
        </span>
      </div>
      <section className="addFont mt-3">
        <div className="vl"></div>
        <div style={{ marginTop: "-155px", marginLeft: "20px" }}>
          <h5 className="heading-color">AR VR Architect </h5>
          <p className="sub-heading-color fontWeight200">Oct 2021 - Aug 2022</p>
        </div>
        <div style={{ marginTop: "50px", marginLeft: "20px" }}>
          <h5 className="heading-color"> Software Engineer VR/XR</h5>
          <p className="sub-heading-color fontWeight200">Oct 2021 - Oct 2021</p>
        </div>
      </section>
      <div
        className="pointCSS"
        style={{ marginTop: "-70px", marginLeft: "-7px" }}
      ></div>

      <div
        className="pointCSS"
        style={{ marginTop: "-120px", marginLeft: "-7px" }}
      ></div>
    </motion.div>
  );
}

export default Experience;
