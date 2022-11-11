import React from "react";
import ManishImg from "../manish-img.png";

export const Hero = () => {
  return (
    <section class="hero">
      <div class="container">
        <div class="row py-5 ">
          <div class="col-5 text-centers order-md-2">
            <img src={ManishImg} alt="my image" width="200%" />
          </div>
          <div class="col-md-7 mt-5 pt-5">
            Hi I am <span class="fw-bold">Manish Khadgi</span>
            <div class="mt-2 mb-5 fs-5 fw-bold">
              Software Engineer | App developer
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              architecto labore, iusto quae numquam aperiam nisi quia molestias
              optio neque alias assumenda, in dolor! Ad similique quidem dolores
              magni quasi.
            </p>
            <button class="btn btn-danger">
              Download Resume <i class="fa-solid fa-download"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
