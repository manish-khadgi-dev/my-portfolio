import React from "react";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <motion.footer
      class="text-info p-5 text-center mt-5"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 2 }}
    >
      Design and Built by Manish Khadgi Copyright &copy; 2022
    </motion.footer>
  );
};
