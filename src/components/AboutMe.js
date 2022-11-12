import React from "react";
import ManishImg from "../assets/manish-img.png";

export const AboutMe = () => {
  return (
    <section id="aboutme" class="container">
      <div class="title">
        <span>About Me</span>
      </div>
      <div class="row py-4">
        <div class="col-md-4">
          <img src={ManishImg} alt="aboutme" width="100%" />
        </div>
        <div class="col-md-8">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae eaque
            commodi error autem atque repudiandae esse aut voluptas corporis
            ducimus tenetur, magnam repellat tempore amet asperiores recusandae
            reprehenderit eius non.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            earum harum ipsa ab ullam, tempora inventore neque qui esse? Quam,
            in minus velit rem temporibus laudantium ratione consequuntur
            quibusdam sapiente!
          </p>
        </div>
      </div>
    </section>
  );
};
