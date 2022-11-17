import React from "react";
import ManishImg from "../assets/manish-img.png";

export const AboutMe = () => {
  return (
    <section id="aboutme" className="container">
      <div className="title">
        <span>About Me</span>
      </div>
      <div className="row py-4">
        <div className="col-md-4">
          <img src={ManishImg} alt="aboutme" width="90%" />
        </div>
        <div className="col-md-8">
          <p>
            Hello! My name is Manish Khadgi. I graduated from Federation
            University in Bachelors of Information Teachnology. Currently, I am
            enrolled in Dented Code Academy Bootcamp to pursue career in
            Software Development.I enjoy developing live Application on the
            internet.
          </p>
          <p>
            Other than coding, I spent most of my free time playing music or
            listening to podcast. I also create mix and master music and beats
            using Ableton live. Please feel free to explore my youtube channel
            <a href="https://www.youtube.com/channel/UC4kLCi4RWB2Iw5K2yYwBZpQ  ">
              {" "}
              Manish Khadgi.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
