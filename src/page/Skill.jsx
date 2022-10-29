import React from "react";
import { motion } from "framer-motion";
function Skill() {
  return (
    <motion.div
      initial={{ opacity: 0, nsition: { duration: 1 } }}
      animate={{ opacity: 1, nsition: { duration: 1 } }}
      exit={{ opacity: 0, nsition: { duration: 1 } }}
      variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
      className="text-white container"
    >
      <h5 className="heading-color addFont fontWeight600">Tech Stack</h5>
    </motion.div>
  );
}

export default Skill;
