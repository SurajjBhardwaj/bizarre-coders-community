import React, { useState } from "react";
import Footer from "../components/Footer";

import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  let navigate = useNavigate();

  const onChange = (e) => [
    setCredentials({ ...credentials, [e.target.name]: e.target.value }),
  ];

  const handleSubmit = async (e) => {
    e.preventDefault(); //synthetic event
    console.log(
      JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      })
    );
    const response = await fetch(
      "https://bc-backend.onrender.com/api/loginuser",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      }
    );
    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert("Check your credentials or Pls Register if not done yet...");
    }

    if (json.success) {
      localStorage.setItem("userEmail", credentials.email);
      localStorage.setItem("authToken", json.authToken);
      console.log(localStorage.getItem("authToken"));
      navigate("/");
    }
  };

  return (
    <>
      <Link to="/">
        <p className="absolute cursor-pointer border border-blue-400 hover:bg-blue-100 text-black font-semibold m-3 p-2 rounded-md top-0">
          Home
        </p>
      </Link>
      <div className="mb-10 min-h-[70vh] scale-[0.8] sm:scale-[1]">
        <div className="bg-slate-800 rounded-3xl  sm:mx-96 sm:mt-16 flex min-h-full flex-1 flex-col justify-center px-2 py-6 lg:px-4">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight  text-blue-200">
              Login to your account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
              action="#"
              method="POST"
            >
              <div>
                <label
                  htmlFor="email"
                  className="text-left block text-sm font-medium leading-6 text-blue-100"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    onChange={onChange}
                    value={credentials.email}
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-blue-300 placeholder:text-blue-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-blue-100"
                  >
                    Password
                  </label>
                  <div className="text-sm"></div>
                </div>
                <div className="mt-2">
                  <input
                    onChange={onChange}
                    value={credentials.password}
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-blue-300 placeholder:text-blue-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-3xl px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
             hover:bg-blue-400 btn "
                >
                  Sign in
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-blue-500">
              Not a member?{" "}
              <Link
                to="/createuser"
                href="#"
                className="font-semibold leading-6 text-red-200 hover:text-green-500"
              >
                Register now!
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
