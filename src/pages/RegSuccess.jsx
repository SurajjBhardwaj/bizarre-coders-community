import success from '../assests/success.svg'
import React from "react";
import { Link } from "react-router-dom";

const RegSuccess = () => {
  // Check if authToken is not present in localStorage
  if (!localStorage.getItem("authToken")) {
    return (
      <div className="flex flex-col justify-center place-items-center pt-12">
        <p>Please log in to view this content</p>
        <Link to="/loginuser">Go to Login</Link>
      </div>
    );
  }

  // If the user is authenticated, render the component
  return (
    <div className="flex flex-col justify-center place-items-center pt-12">
      <img width="500" src={success} />
      <h1 className="bg-blue-400 font-bold text-white px-4 py-1 text-xl my-4 rounded-md">
        Registration Successful🤩 Check your mail for further details!📩
      </h1>
      <Link to="/">
        <button className="hover:underline font-bold hover:text-blue-400">
          Return to Home
        </button>
      </Link>
    </div>
  );
};

export default RegSuccess;
;
