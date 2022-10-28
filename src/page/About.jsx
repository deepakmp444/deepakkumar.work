import React from "react";
import { motion } from "framer-motion";
function About() {
  return (
    <motion.div
      initial={{ opacity: 0, nsition: { duration: 1 } }}
      animate={{ opacity: 1, nsition: { duration: 1 } }}
      exit={{ opacity: 0, nsition: { duration: 1 } }}
      variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
      className="p-5 addFont fontWeight400 heading-color"
      style={{ fontSize: "20px", marginTop: "170px" }}
    >
      Technology is a passion of mine and I enjoy nothing more than learning the
      trends that technology is taking in order to work more efficiently and see
      progress and success. I love seeing the big picture mapped out for
      technology needs.
    </motion.div>
  );
}

export default About;
