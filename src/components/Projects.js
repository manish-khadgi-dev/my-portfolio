import React from "react";
import ProjectImg from "../assets/project.jpeg";

export const Projects = () => {
  return (
    <div id="projects" class="projects py-4">
      <div class="title">
        <span>Projects</span>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md order-md-2">
            <img src={ProjectImg} alt="project 1" width="100%" />
          </div>
          <div class="col-md">
            <h2>My Portfolio site</h2>
            <div>
              <a href="#">
                <i class="fa-brands fa-github"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-chrome"></i>
              </a>
            </div>
            <p class="mt-3 fw-bold">Tech Used : HTML, CSS, JAVASCRIPT REACT</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              repellendus, a quod saepe doloremque perspiciatis fugiat earum,
              deserunt non natus voluptatem eveniet temporibus repudiandae.
              Praesentium rerum laboriosam similique cumque eaque.
            </p>
          </div>
        </div>
        <div class="row py-5">
          <div class="col-md ">
            <img src={ProjectImg} alt="project 1" width="100%" />
          </div>
          <div class="col-md">
            <h2>My Portfolio site</h2>
            <div>
              <a href="#">
                <i class="fa-brands fa-github"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-chrome"></i>
              </a>
            </div>
            <p class="mt-3 fw-bold">Tech Used : HTML, CSS, JAVASCRIPT REACT</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              repellendus, a quod saepe doloremque perspiciatis fugiat earum,
              deserunt non natus voluptatem eveniet temporibus repudiandae.
              Praesentium rerum laboriosam similique cumque eaque.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md order-md-2">
            <img src={ProjectImg} alt="project 1" width="100%" />
          </div>
          <div class="col-md">
            <h2>My Portfolio site</h2>
            <div>
              <a href="#">
                <i class="fa-brands fa-github"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-chrome"></i>
              </a>
            </div>
            <p class="mt-3 fw-bold">Tech Used : HTML, CSS, JAVASCRIPT REACT</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              repellendus, a quod saepe doloremque perspiciatis fugiat earum,
              deserunt non natus voluptatem eveniet temporibus repudiandae.
              Praesentium rerum laboriosam similique cumque eaque.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
