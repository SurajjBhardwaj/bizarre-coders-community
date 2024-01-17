import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Team from "./components/Team";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contributor from "./components/Contributor";

const App = () => {
  return (
    // <div className="p min-h-[100vh] ">
    //   <Navbar />
    //   <Main />\
    //   <Footer />
    //   <Team/>
    // </div>
    <>
      <Router>
        <Navbar />
        <Main />
        {/* <Team /> */}
        <Contributor/>
        <Routes>
          {/* <Route exact path="/" element={<Home />} /> */}
          {/* <Route exa ct path="/Team" element={<Team />} /> */}

          {/* <Route exact path="/technology" element={<News setProgress={this.setProgress} key="technology" pageSize={6} country="in" category="Technology"/>} /> */}
        </Routes>
      </Router>

      <Footer className="end-0" />
    </>
  );
};

export default App;
