import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="p-3 absolute w-full z-0">
      <hr />
      <h1 className="my-2 text-slate-800  text-center">
        Developed with ❤ by{" "}
        <Link target="_saka" to="https://kamal-nayan-dev-portfolio.vercel.app">
          <span className="hover:text-blue-500 text-slate-800 font-bold text-center">
            @saka_codes
          </span>
        </Link>
      </h1>
    </footer>
  );
};

export default Footer;
