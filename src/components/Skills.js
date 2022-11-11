import React from "react";

export const Skills = () => {
  return (
    <section id="skill" class="container py-4">
      <div class="row">
        <div class="col">
          {/* <!-- title --> */}
          <div class="title">
            <span>Skills</span>
          </div>

          {/* <!-- icons --> */}
          <div class="icons">
            <div>
              <i class="fa-brands fa-html5 text-danger"> </i> HTML
            </div>
            <div>
              <i class="fa-brands fa-css3 text-primary"> </i> CSS
            </div>
            <div>
              <i class="fa-brands fa-js text-danger"> </i> JAVASCRIPT
            </div>
            <div>
              <i class="fa-brands fa-php"> </i> PHP
            </div>
            <div>
              <i class="fa-brands fa-github"> </i>GITHUB
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
