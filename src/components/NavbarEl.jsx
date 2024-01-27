import React, { useState } from "react";
import { FaRegBell } from "react-icons/fa";

import { Link } from "react-router-dom";

import { PiYoutubeLogoFill } from "react-icons/pi";

const NavbarEl = () => {
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
  return (
    <div className="w-full ">
      <nav className="w-full flex justify-between p-3 sm:p-4 bg-slate-600">
        <Link to="/">
          <h1 className="text-sm font-light sm:text-2xl text-white z-100  ">
            Bizarre <span className="font-bold text-white">Coders</span>
          </h1>
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
            <button className=" text-white text-2xl p-1 hover:scale-[1.1]">
              <FaRegBell onClick={handleNotifcations} />
            </button>
          </div>
          <div className="gap-x-3">
            <button className="active:scale-95 mx-2 p-1 text-white px-3 hover:opacity-70 btn font-bold">
              Certifications
            </button>

            <button
              onClick={handleDrop}
              className=" active:scale-95 mx-2 p-1 text-white px-3 hover:opacity-70 btn font-bold"
            >
              Resources
            </button>
            <button className="active:scale-95 mx-2 p-1 text-white px-3 hover:opacity-70 btn font-bold">
              Events
            </button>
            {/* <button className="mx-2 p-1 text-white px-3 hover:opacity-70 btn font-bold">Courses</button> */}

            {/* <Link to="/login">
              {" "}
              <button className=" active:scale-95 mx-2 p-1 text-white px-3 hover:opacity-70 btn font-bold">
                Login
              </button>
            </Link> */}
          </div>
        </div>
      </nav>

      {showDrop ? (
        <div className=" absolute ml-[1000px] z-10 items-right text-white font-semibold w-48 float-right mr-16 m-1 btn py-2">
          <ul className="text-center">
            <Link to="/learnDSA">
              <li
                onClick={handleDrop}
                className="active:scale-95 btn m-1 p-1 hover:opacity-100 opacity-60 "
              >
                Data Structure & Algo
              </li>
            </Link>
            <Link>
              <li
                onClick={handleDrop}
                className=" active:scale-95 btn m-1 p-1 hover:opacity-100 opacity-60 "
              >
                Web Development
              </li>
            </Link>
            <Link>
              <li
                onClick={handleDrop}
                className=" active:scale-95 btn m-1 p-1 hover:opacity-100 opacity-60 "
              >
                Android Development
              </li>
            </Link>
            <Link>
              <li
                onClick={handleDrop}
                className=" active:scale-95 btn m-1 p-1 hover:opacity-100 opacity-60 "
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
        <div className=" absolute ml-[750px] z-10 items-right text-white font-semibold w-[400px] min-h-[300px] float-right mr-16 m-1 btn py-2">
          {/* <p>No new notifcation</p> */}
          <p className="btn mx-1">Official Website of Bizarre Coders Club has launched🎉🤩</p>

        </div>
      ) : (
        " "
      )}
    </div>
  );
};

export default NavbarEl;

// import React from "react";
// import { IoLogoBuffer } from "react-icons/io";
// import {
//   Navbar,
//   NavbarBrand,
//   NavbarContent,
//   NavbarItem,
//   NavbarMenu,
//   NavbarMenuItem,
//   Link,
//   Button,
//   NavbarMenuToggle,
// } from "@nextui-org/react";
// // import { AcmeLogo } from "./AcmeLogo.jsx";

// export default function NavbarEl() {
//   const menuItems = [
//     "Profile",
//     "Dashboard",
//     "Activity",
//     "Analytics",
//     "System",
//     "Deployments",
//     "My Settings",
//     "Team Settings",
//     "Help & Feedback",
//     "Log Out",
//   ];

//   return (
//     <Navbar disableAnimation isBordered>
//       <NavbarContent className="block sm:hidden bg-red-300" justify="start">
//         <NavbarMenuToggle className="block md:hidden" />
//       </NavbarContent>
//       <NavbarContent className="sm:hidden pr-3" justify="center">
//         <NavbarBrand>
//           <IoLogoBuffer />
//           <p className="font-bold text-inherit">ACME</p>
//         </NavbarBrand>
//       </NavbarContent>
//       <NavbarContent className="hidden sm:flex gap-4" justify="center">
//         <NavbarBrand>
//           <IoLogoBuffer />
//           <p className="font-bold text-inherit">ACME</p>
//         </NavbarBrand>
//         <NavbarItem>
//           <Link color="foreground" href="#">
//             Features
//           </Link>
//         </NavbarItem>
//         <NavbarItem isActive>
//           <Link href="#" aria-current="page" color="warning">
//             Customers
//           </Link>
//         </NavbarItem>
//         <NavbarItem>
//           <Link color="foreground" href="#">
//             Integrations
//           </Link>
//         </NavbarItem>
//       </NavbarContent>
//       <NavbarContent justify="end">
//         <NavbarItem className="hidden lg:flex">
//           <Link href="#">Login</Link>
//         </NavbarItem>
//         <NavbarItem>
//           <Button as={Link} color="warning" href="#" variant="flat">
//             Sign Up
//           </Button>
//         </NavbarItem>
//       </NavbarContent>

//       <NavbarMenu>
//         {menuItems.map((item, index) => (
//           <NavbarMenuItem key={`${item}-${index}`}>
//             <Link
//               className="w-full"
//               color={
//                 index === 2
//                   ? "warning"
//                   : index === menuItems.length - 1
//                   ? "danger"
//                   : "foreground"
//               }
//               href="#"
//               size="lg"
//             >
//               {item}
//             </Link>
//           </NavbarMenuItem>
//         ))}
//       </NavbarMenu>
//     </Navbar>
//   );
// }
