import React from "react";
import NavbarEl from "../components/NavbarEl";
import Main from "../components/Main";
import Team from "../components/Team";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <NavbarEl />
      <Main />
      <Team />
      <Footer className="end-0" />
    </>
  );
};

export default Home;
