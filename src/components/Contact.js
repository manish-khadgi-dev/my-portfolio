import React from "react";

export const Contact = () => {
  return (
    <section id="contactme" class="container contact rounded-5 p-5">
      <div class="title">
        <span>Contact Me</span>
      </div>

      {/* <!-- icons to link  --> */}
      <div class="row mb-5">
        <div class="col fa-3x d-flex justify-content-between p-5">
          <a href="mailto:manishkhadgi123@gmail.com">
            <i class="fa-solid fa-envelope"></i>
          </a>
          <a href="https://www.linkedin.com/in/manishkhadgi/" target="_blank">
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a href="">
            <i class="fa-brands fa-facebook"></i>
          </a>
          <a href="tel:04952384235">
            <i class="fa-brands fa-youtube"></i>
          </a>
        </div>
      </div>
    </section>
  );
};
