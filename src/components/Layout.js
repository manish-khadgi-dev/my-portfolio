import React from "react";

export const Layout = ({ children }) => {
  return (
    <>
      {children}
      <footer class="bg-dark text-light p-5 text-center mt-5">
        Copyright &copy; All right reserved. Made by Dr.lal prasad topi
      </footer>
    </>
  );
};
