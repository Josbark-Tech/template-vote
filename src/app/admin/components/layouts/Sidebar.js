"use client";

import React from "react";
import { BiSolidHomeAlt2 } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { AiTwotoneSetting } from "react-icons/ai";
import { RiLogoutBoxRFill } from "react-icons/ri";

//
// import Profile from "./Profile";
// import { Link } from "react-router-dom";
// import Search from "./Search";

const listMenu = [
  { nom: "Acceuil", icon: BiSolidHomeAlt2 },
  { nom: "Candidat", icon: "" },
  { nom: "Electeur", icon: "" },
  { nom: "Parametre", icon: "" },
  { nom: "Quitter", icon: "" },
];
export default function Siderbar() {
  // const [isOpen, setIsOpen] = useState(false);
  // const [active, setActive] = useState("home");
  console.log(listMenu);

  return (
    <aside class="h-full w-16 flex flex-col space-y-10 items-center justify-center relative bg-gray-800 text-white">
      
      <div class="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-black hover:duration-300 hover:ease-linear focus:bg-white">
        <BiSolidHomeAlt2 size={36} className="text-white" />
      </div>
      {/* <!-- Courses --> */}
      <div class="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-black  hover:duration-300 hover:ease-linear focus:bg-white">
        <FaUserGraduate size={36} className="text-white" />
        {/* <label for="">Candidat</label> */}
      </div>

      {/* <!-- Theme --> */}
      <div class="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
        <FaUsers size={36} className="text-white" />{" "}
        {/* <label for="">Electeur</label> */}
      </div>

      {/* <!-- Configuration --> */}
      <div class="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
        <AiTwotoneSetting size={36} className="text-white" />
      </div>
      <div class="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
        <RiLogoutBoxRFill size={36} className="text-white" />
      </div>
    </aside>
  );
}
