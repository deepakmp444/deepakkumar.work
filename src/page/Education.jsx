import React from "react";
import { motion } from "framer-motion";
function Education() {
  return (
    <motion.div
      initial={{ opacity: 0, nsition: { duration: 1 } }}
      animate={{ opacity: 1, nsition: { duration: 1 } }}
      exit={{ opacity: 0, nsition: { duration: 1 } }}
      variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
      className="text-white"
    >
      Education
    </motion.div>
  );
}

export default Education;
