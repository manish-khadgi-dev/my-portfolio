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
              <i class="fa-brands fa-js text-dark bg-warning"> </i> JAVASCRIPT
            </div>
            <div>
              <i class="fa-brands fa-react text-primary bg-dark"></i> React
            </div>
            <div>
              <i class="fa-brands fa-github text-white bg-dark"> </i>GITHUB
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
