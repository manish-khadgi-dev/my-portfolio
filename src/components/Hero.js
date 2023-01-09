import React from "react";
import resume from "../assets/Resume-Manish-Khadgi.pdf";
import { Col, Row } from "react-bootstrap";

import { motion } from "framer-motion";
import { Layout } from "./Layout";

export const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <div className="col-md-9 pt-3 mt-4">
              Hi, i am <p />
              <span className="fw-bold ">
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
                  Software Engineer | App developer
                </motion.h2>
              </div>
              <Row className="fs-8 text-info">
                <Col md={9}>
                  I'm a multidisciplinary developer and designer from Sydney,
                  Australia with a passion for creating engaging, entertaining
                  user experience using MERN stack including React JS, MongoDB,
                  Node JS and Express JS. Experience in e-commerce platform
                  building as a software developer. Good understanding of modern
                  web application development. Strong ability to work in a
                  fast-paced collaborative team environment
                </Col>
                <Col></Col>
              </Row>
              <a href={resume} download>
                <motion.button
                  className="btn btn-dark text-white mt-5"
                  whileHover={{ scale: 1.3, originX: 0, color: "#f8e112" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Download Resume <i className="fa-solid fa-download "></i>
                </motion.button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
