import React, { useState } from "react";
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
    const response = await fetch("http://localhost:5000/api/loginuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
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
    <div className="min-h-[70vh] scale-[0.8] sm:scale-[1]">
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
                <div className="text-sm">
                
                </div>
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
  );
};

export default Login;


// import React, { useState } from "react";
// import google from "../assests/google.svg";
// import login from "../assests/login.svg";
// import styled from "styled-components";

// const Login = () => {
//   const [credentials, setCredentials] = useState({
//     email: "",
//     password: "",
//   });

//   let navigate = useNavigate();

//   const onChange = (e) => [
//     setCredentials({ ...credentials, [e.target.name]: e.target.value }),
//   ];

//   const handleSubmit = async (e) => {
//     e.preventDefault(); //synthetic event
//     console.log(
//       JSON.stringify({
//         email: credentials.email,
//         password: credentials.password,
//       })
//     );
//     const response = await fetch("http://localhost:5000/api/loginuser", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         email: credentials.email,
//         password: credentials.password,
//       }),
//     });
//     const json = await response.json();
//     console.log(json);

//     if (!json.success) {
//       alert("Check your credentials or Pls Register if not done yet...");
//     }

//     if (json.success) {
//       localStorage.setItem("userEmail", credentials.email);
//       localStorage.setItem("authToken", json.authToken);
//       console.log(localStorage.getItem("authToken"));
//       navigate("/");
//     }
//   };

//   const Main = styled.div`
//     display: flex;
//     background-color: blacksmoke;
//     border-radius: 20px;
//     margin: 2rem;
//     height: 90vh;
//     box-sizing: border-box;
//   `;

//   const Title = styled.h1`
//     font-size: 2rem;
//     text-align: center;
//     color: black;
//   `;

//   const Label = styled.p`
//     font-size: 14px;
//     text-align: center;
//     margin-bottom: 2rem;
//     margin-top: 10px;
//   `;

//   const Flex = styled.div`
//     display: flex;
//   `;

//   const Small = styled.p`
//     font-size: 0.7rem;
//   `;

//   const Light = styled.p`
//     font-size: 0.8rem;
//     color: gray;
//     opacity: 0.8;
//   `;

//   const Left = styled.div`
//     flex: 7;
//   `;

//   const Right = styled.div`
//     flex: 3;
//     background-color: black;
//     margin: 10px;
//     border-radius: 10px;
//     padding-left: 50px;
//     padding-right: 50px;
//     padding-top: 5rem;
//     overflow: hidden;
//   `;

//   const Input = styled.div`
//     display: flex;
//     flex-direction: row;
//     align-items: flex-end;
//     display: inline-block;
//     margin-top: 15px;
//     margin-left: 2rem;
//   `;

//   const More = styled.div`
//     display: flex;
//     justify-content: flex-end;
//     margin-right: 2rem;
//     margin-top: 5px;
//   `;

//   const LoginBtn = styled.button`
//     font-weight: bold;
//     color: black;
//     width: 80%;
//     border: none;
//     border-radius: 50px;
//     padding: 12px;
//     cursor: pointer;
//     margin-bottom: 10px;
//     font-size: 15px;
//     margin-left: 2.5rem;
//     margin-top: 2rem;
//   `;

//   const GoogleBtn = styled.button`
//     display: flex;
//     background-color: blacksmoke;
//     color: black;
//     width: 80%;
//     border: none;
//     border-radius: 50px;
//     padding: 12px;
//     cursor: pointer;
//     margin-bottom: 10px;
//     margin-left: 2.5rem;
//     font-weight: bold;
//   `;

//   const Img = styled.img`
//     margin-left: auto;
//     margin-right: -45px;
//   `;

//   const P = styled.p`
//     margin-left: auto;
//     margin-right: auto;
//     font-size: 15px;
//     text-align: center;
//   `;

//   const Signup = styled.div`
//     font-size: 13px;
//     bottom: 0;
//     text-align: center;
//     margin-top: 2rem;
//     cursor: pointer;
//   `;

//   const InputTag = styled.input`
//     border: none;
//     border-bottom: 1px solid black;
//     width: 300px;
//     color: gray;
//     padding: 10px 5px;
//     font-size: 15px;
//   `;

//   const Bold = styled.p`
//     font-weight: 500;
//   `;

//   const LoginImg = styled.img`
//     margin-top: 7rem;
//     margin-left: 6rem;
//   `;

//   return (
//     <Main className="main">
//       <Left className="left">
//         <LoginImg className="login-img" src={login} width="500" alt="" />
//       </Left>
//       <Right className="right-main">
//         <Title className="title">Welcome back!</Title>
//         <Label className="title-label">Please enter your details</Label>
//         <form onSubmit={handleSubmit} method="POST">
//           <Input className="input-box">
//             <label htmlFor="email">Email</label>
//             <br />
//             <InputTag
//               onChange={onChange}
//               value={credentials.email}
//               className="input-tag"
//               type="email"
//               name="email"
//             />
//           </Input>

//           <br />
//           <Input>
//             <label htmlFor="password">Password</label>
//             <br />
//             <InputTag
//               onChange={onChange}
//               value={credentials.password}
//               className="input-tag"
//               type="password"
//               name="password"
//             />
//           </Input>
//           <More>
//             <Light>Forgot Password?</Light>
//           </More>
//           <LoginBtn
//             type="submit"
//             className="hover:bg-blue-400 active:scale-90 bg-blue-500 submitBtn"
//           >
//             Log In
//           </LoginBtn>
//           <GoogleBtn className="submitBtn" type="submit">
//             <Img className="google-img" src={google} width="20px" alt="" />
//             <P>Log in with Google</P>
//           </GoogleBtn>
//           <Signup className="signup">
//             Don't have an account?{" "}
//             <Link to="/createuser">
//               <strong className="hover:text-blue-500"> Sign Up</strong>
//             </Link>
//           </Signup>
//         </form>
//       </Right>
//     </Main>
//   );
// };

// export default Login;
