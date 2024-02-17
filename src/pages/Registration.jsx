import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    phoneNo: "",
    rollNo: "",
    year: "",
    branch: "",
    anyDoubt: "",
  });

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value }); // Changed from square brackets to parentheses
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); //synthetic event
    console.log(
      JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        phoneNo: credentials.phoneNo,
        rollNo: credentials.rollNo,
        year: credentials.year,
        branch: credentials.branch,
        anyDoubt: credentials.anyDoubt,
      })
    );

    const response = await fetch("http://localhost:5000/api/registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        phoneNo: credentials.phoneNo,
        rollNo: credentials.rollNo,
        year: credentials.year,
        branch: credentials.branch,
        anyDoubt: credentials.anyDoubt,
      }),
    });
    const json = await response.json();
    console.log(json);

    if (!response.ok) {
      alert("Something is wrong!");
    }

    if (response.ok) {
      navigate("/succesfully_registered");
    }
  };

    if (!localStorage.getItem("authToken")) {
      return (
        <div className="flex flex-col justify-center place-items-center pt-12">
          <p>Please log in to view this content</p>
          <Link to="/loginuser">Go to Login</Link>
        </div>
      );
    }

  return (
    <>
      
            <p className="absolute cursor-pointer hover:text-blue-400 text-black font-semibold m-3 underline">
              Home
            </p>
        <div className="scale-[0.8] sm:scale-[1] min-h-[70vh]">
          <Link to="/">
          </Link>
          <div className="bg-slate-800 rounded-3xl sm:mx-96 sm:mt- my-2 flex min-h-full flex-1 flex-col justify-center px-2 py-2 lg:px-4 border-2 border-blue-400">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="mt-6 py-1   text-center text-2xl font-bold leading-9 tracking-tight  text-blue-500">
                Register for the event
              </h2>
            </div>

            <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <div className="mt-2">
                    <input
                      onChange={onChange}
                      value={credentials.name}
                      id="name"
                      name="name"
                      type="text" // Changed from type="name" to type="text"
                      autoComplete="name"
                      placeholder="Name"
                      required
                      className="px-2 text-md block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-blue-300 placeholder:text-blue-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <div className="mt-2">
                    <input
                      onChange={onChange}
                      value={credentials.email}
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder=" Email"
                      required
                      className="px-2 text-md block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-blue-300 placeholder:text-blue-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between"></div>
                  <div className="mt-2">
                    <input
                      onChange={onChange}
                      value={credentials.phoneNo}
                      id="phoneNo"
                      name="phoneNo"
                      type="number"
                      autoComplete="current-password"
                      placeholder=" Phone number"
                      required
                      className="px-2 text-md block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-blue-300 placeholder:text-blue-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between"></div>
                  <div className="mt-2">
                    <input
                      onChange={onChange}
                      value={credentials.rollNo}
                      id="roll"
                      name="rollNo"
                      type="number"
                      placeholder=" Roll no."
                      required
                      className="px-2 text-md block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-blue-300 placeholder:text-blue-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between"></div>
                  <div className="-mt-1">
                    <div>
                      <input
                        onChange={onChange}
                        value={credentials.year}
                        id="year"
                        name="year"
                        type="number"
                        placeholder="Current year (1/2) "
                        required
                        className="px-2 text-md block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-blue-300 placeholder:text-blue-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <div className="mt-2">
                    <input
                      onChange={onChange}
                      value={credentials.branch}
                      id="branch"
                      name="branch"
                      type="text" // Changed from type="name" to type="text"
                      autoComplete="name"
                      placeholder=" Branch"
                      required
                      className="px-2 text-md block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-blue-300 placeholder:text-blue-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="mt-2">
                    <input
                      onChange={onChange}
                      value={credentials.anyDoubt}
                      id="anyDoubt"
                      name="anyDoubt"
                      type="text"
                      autoComplete="doubt"
                      placeholder="Any doubt regarding the event?"
                      className="px-2 text-md block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-blue-300 placeholder:text-blue-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <button
                    onClick={handleSubmit}
                    type="submit"
                    className="flex w-full justify-center rounded-3xl mb-4  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
             hover:bg-blue-400 btn "
                  >
                    Register now!🚀
                  </button>
                  {/* <Link to="/succesfully_registered">
                    <p className="absolute cursor-pointer hover:text-blue-400 text-black font-semibold m-3 underline">
                      success
                    </p>
                  </Link> */}
                </div>
              </form>
            </div>
          </div>
        </div>
    </>
  );
};

export default Registration;
