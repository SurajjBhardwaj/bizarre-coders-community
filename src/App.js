import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Team from "./components/Team";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contributor from "./components/Contributor";
import Login from "./components/Login";
import Register from "./components/Register";
import LearnDSA from "./pages/LearnDSA";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Registration from "./pages/Registration";
import RegSuccess from "./pages/RegSuccess";

const App = () => {
  return (
    // <div className="p min-h-[100vh] ">
    //   <Navbar />
    //   <Footer />
    // <Team/>
    // </div>
    <>
      <Router>
        {/* <Navbar /> */}
        {/* <Main /> */}
        {/* <Main /> */}
        {/* <Team /> */}
        {/* <Contributor/> */}
        <Routes>
          {/* <Route exact path="/" element={<Home />} /> */}
          {/* <Route exact path="/Team" element={<Team />} /> */}
          <Route exact path="/learnDSA" element={<LearnDSA />} />
          <Route exact path="/loginuser" element={<Login />} />
          <Route exact path="/createuser" element={<Register />} />
          <Route exact path="/events" element={<Events />} />
          <Route exact path="/registration" element={<Registration />} />
          <Route
            exact
            path="/succesfully_registered"
            element={<RegSuccess />}
          />
          <Route exact path="/" element={<Home />} />

          {/* <Route exact path="/technology" element={<News setProgress={this.setProgress} key="technology" pageSize={6} country="in" category="Technology"/>} /> */}
        </Routes>
      </Router>

      {/* <Footer className="end-0" /> */}
    </>
  );
};

export default App;
