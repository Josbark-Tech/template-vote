"use client";

import React from "react";
import { BiSolidHomeAlt2 } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { AiTwotoneSetting } from "react-icons/ai";
import { RiLogoutBoxRFill } from "react-icons/ri";
import Link from "next/link";

const listMenu = [
  { nom: "Acceuil", icon: BiSolidHomeAlt2 ,link:"/admin"},
  { nom: "Candidat", icon: FaUserGraduate ,link:"/admin/candidat"},
  { nom: "Electeur", icon: FaUsers ,link:"/admin/elector"},
  { nom: "Parametre", icon: AiTwotoneSetting,link:"/admin" },
  { nom: "Quitter", icon: RiLogoutBoxRFill ,link:"/admin"},
];
export default function Siderbar() {
  // const [isOpen, setIsOpen] = useState(false);
  // const [active, setActive] = useState("home");
  // console.log(listMenu);

  return (
    <aside className="h-full w-16 flex flex-col space-y-10 items-center justify-center relative bg-gray-800 text-white">
      {listMenu.map((item, key) => (
        <Link  href={item.link} key={key}>
          <div className="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-black hover:duration-300 hover:ease-linear focus:bg-white">
            <item.icon size={36} className="text-white" />
          </div>
        </Link>
      ))}
    </aside>
  );
}
