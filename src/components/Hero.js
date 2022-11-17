import React from "react";
import resume from "../assets/Resume-Manish-Khadgi.pdf";
import { motion } from "framer-motion";

export const Hero = ({}) => {
  return (
    <section className="hero">
      <div className="container">
        <div className="row py-5 ">
          <div className="col-md-9  pt-3 text-info">
            Hi, i am <p />
            <span className="fw-bold text-white">
              <motion.h1
                className="display-1"
                initial={{ x: 100 }}
                animate={{ x: 0 }}
                transition={{ ease: "easeOut", duration: 2 }}
              >
                Manish Khadgi
              </motion.h1>
            </span>
            <div className="mt-2 mb-5 fs-5 fw-bold text-white">
              <motion.h2
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                transition={{ ease: "easeOut", duration: 2 }}
              >
                Software Engineer | App developer{" "}
              </motion.h2>
            </div>
            <p className="fs-8">
              I'm a multidisciplinary developer and designer from Sydney,
              Australia with a passion for creating engaging, entertaining user
              experience.
            </p>
            <a href={resume} download>
              <motion.button
                className="btn btn-dark text-white mt-5"
                animate={{ x: [0, 100, 0] }}
                whileHover={{ scale: 1.3, originX: 0, color: "#e62020" }}
              >
                Download Resume <i className="fa-solid fa-download "></i>
              </motion.button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
