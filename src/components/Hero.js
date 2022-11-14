import React from "react";
import resume from "../assets/Resume-Manish-Khadgi.pdf";

export const Hero = ({}) => {
  return (
    <section className="hero py-5 mt-5">
      <div className="container">
        <div className="row py-5 ">
          <div className="col-md-9  pt-5 text-info">
            Hi, i am <p />
            <span className="fw-bold text-white">
              <h1 className="display-1">Manish Khadgi</h1>
            </span>
            <div className="mt-2 mb-5 fs-5 fw-bold text-white">
              <h2>Software Engineer | App developer </h2>
            </div>
            <p className="fs-8">
              I'm a Software Developer from Sydney, Australia with solid
              experience in building complex application with modern technlogy.
            </p>
            <a href={resume} download>
              <button className="btn btn-dark text-white mt-3">
                Download Resume <i className="fa-solid fa-download"></i>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
