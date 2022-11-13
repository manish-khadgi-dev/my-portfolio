import React from "react";
import ManishImg from "../assets/manish-img.png";

export const Hero = () => {
  return (
    <section className="hero py-5 mt-5">
      <div className="container">
        <div className="row py-5 ">
          <div className="col-md-5 text-center order-md-2">
            <img src={ManishImg} alt="aboutme" width="60%" />
          </div>
          <div className="col-md-7 mt-5 pt-5">
            Hi I am <span className="fw-bold">Manish Khadgi</span>
            <div className="mt-2 mb-5 fs-5 fw-bold">
              Software Engineer | App developer
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              architecto labore, iusto quae numquam aperiam nisi quia molestias
              optio neque alias assumenda, in dolor! Ad similique quidem dolores
              magni quasi.
            </p>
            <button className="btn btn-danger">
              Download Resume <i className="fa-solid fa-download"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
