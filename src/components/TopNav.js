import React from "react";
import Logo from "../assets/manish-img-logo.png";

export const TopNav = () => {
  return (
    <div id="navbar" class="topNav">
      <nav class="navbar navbar-expand-md bg-none">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <source src={Logo} alt="" width="100px" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#skill">
                  Skill
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#projects">
                  Project
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#aboutme">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="#contactme"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
