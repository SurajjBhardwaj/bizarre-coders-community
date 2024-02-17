import React, { useState } from "react";
import { FaRegBell } from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";
import logo from "../assests/logo.png";
import { PiYoutubeLogoFill } from "react-icons/pi";

const Navbar = () => {
  const [showDrop, setShowDrop] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const handleDrop = () => {
    setShowDrop(!showDrop);
    setShowNotifications(false);
  };
  const handleNotifcations = () => {
    setShowNotifications(!showNotifications);
    setShowDrop(false);
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    window.location.reload();
    // navigate("/");
    setTimeout(() => {
      navigate("/");
    }, 500);
  };
  return (
    <div className="w-full sticky top-0 z-10">
      <nav className="w-full flex justify-between p-3 sm:p-4">
        <Link to="/">
          <div className="flex">
            <img width="40" src={logo} alt="" />
            <h1 className="text-sm font-light sm:text-2xl text-black z-100  ">
              Bizarre <span className="font-bold text-black">Coders</span>
            </h1>
          </div>
        </Link>
        <div className="flex gap-x-5">
          <div className="gap-x-2">
            {" "}
            <Link target="_saka" to="https://www.youtube.com/@BizarreCoders">
              {" "}
              <button className="text-red-500 text-3xl p-1 hover:scale-[1.1]">
                <PiYoutubeLogoFill classname="cursor-pointer" />
              </button>
            </Link>
            {/* <button className=" text-black text-2xl p-1 hover:scale-[1.1]">
              <FaRegBell onClick={handleNotifcations} />
            </button> */}
          </div>

          <div className="flex">
            <div className="gap-x-3">
              {localStorage.getItem("authToken") ? (
                <>
              <button
                onClick={handleDrop}
                className="hidden sm:inline active:scale-95 mx-2 p-1  px-3 hover:bg-blue-100 hover:text-blue-500  font-bold rounded-md text-gray-500"
              >
                Resources
              </button>

                  <Link target="_saka" to="https://www.freecodecamp.org/">
                    <button className="active:scale-95 mx-2 p-1  px-3 hover:bg-blue-100 hover:text-blue-500   font-bold rounded-md text-gray-500">
                      Certifications
                    </button>
                  </Link>

                  <Link to="/events">
                    {" "}
                    <button className="active:scale-95 mx-2 p-1  px-3 hover:bg-blue-100 hover:text-blue-500  font-bold  rounded-md text-gray-500">
                      Events
                    </button>
                  </Link>
                </>
              ) : (
                ""
              )}

              {/* <button className="mx-2 p-1 text-black px-3 hover:bg-blue-100 hover:scale-110 btn font-bold">Courses</button> */}
              {!localStorage.getItem("authToken") ? (
                <div className="d-flex inline">
                  <Link to="/loginuser">
                    {" "}
                    <button
                      className=" active:scale-95 mx-2 p-1 px-3 hover:opacity-70 btn font-bold rounded-3xl hover:bg-blue-500 
                    hover:text-white
                    text-blue-500"
                    >
                      Login
                    </button>
                  </Link>
                </div>
              ) : (
                <button
                  onClick={handleLogout}
                  className=" active:scale-95 mx-2 p-1  px-3 bg-blue-400 rounded-3xl hover:bg-blue-500 text-white btn font-bold"
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      {showDrop ? (
        <div className=" absolute ml-[850px] z-10 items-right text-black font-semibold w-48 rounded-xl float-right mr-16 m-1 btn py-2">
          <ul className="text-center">
            <Link to="/learnDSA">
              <li
                onClick={handleDrop}
                className="active:scale-95 text-white rounded-3xl m-1 p-1  bg-blue-500 hover:bg-blue-300"
              >
                Data Structure & Algo
              </li>
            </Link>
            <Link>
              <li
                onClick={handleDrop}
                className=" active:scale-95 text-white rounded-3xl m-1 p-1  bg-blue-500 hover:bg-blue-300"
              >
                Web Development
              </li>
            </Link>
            <Link>
              <li
                onClick={handleDrop}
                className=" active:scale-95 text-white rounded-3xl m-1 p-1  bg-blue-500 hover:bg-blue-300"
              >
                Android Development
              </li>
            </Link>
            <Link>
              <li
                onClick={handleDrop}
                className=" active:scale-95 text-white rounded-3xl m-1 p-1  bg-blue-500 hover:bg-blue-300"
              >
                Machine Learning
              </li>
            </Link>
          </ul>
        </div>
      ) : (
        " "
      )}

      {showNotifications ? (
        <div className=" absolute ml-[750px] z-10 items-right text-black font-semibold w-[400px] min-h-[300px] float-right mr-16 m-1 btn py-2">
          {/* <p>No new notifcation</p> */}
          <p className="btn mx-1">
            Official Website of Bizarre Coders Club has launched🎉🤩
          </p>
        </div>
      ) : (
        " "
      )}
    </div>
  );
};

export default Navbar;
