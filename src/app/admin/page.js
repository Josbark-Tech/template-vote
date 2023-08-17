"use client";
import Main from "./components/layouts/Page";
import Tableau from "./components/Tableau";
import { MdOutlineNavigateNext } from "react-icons/md";
import { MdOutlineEventNote } from "react-icons/md";
import { BiSolidUser } from "react-icons/bi";

import Card from "./components/_dashboard/Card";
// data={dataCandidat} thead={thead}
const thead = [
  { title1: "CANDIDAT " },
  { title1: "NOMBRE DE VOTE " },
  { title1: "NOMBRE DE J'AIME " },
  { title1: "TENDANCES " },
];

const dataCandidat = [
  {
    nom: "Vera ",
    prenom: "Carpenter",
    image: "/uploads/001.png",
    like: "2020",
    vote: "200",
    dislike: "",
  },
  {
    nom: "Vera ",
    prenom: "Carpenter",
    image: "/uploads/005.png",
    like: "2020",
    vote: "200",
    dislike: "",
  },
  {
    nom: "Vera ",
    prenom: "Carpenter",
    image: "/uploads/006.png",
    like: "2020",
    vote: "200",
    dislike: "",
  },
  {
    nom: "Vera ",
    prenom: "Carpenter",
    image: "/uploads/008.png",
    like: "2020",
    vote: "200",
    dislike: "",
  },
  {
    nom: "Alonzo ",
    prenom: "Carpenter",
    image: "/uploads/009.png",
    like: "2020",
    vote: "200",
    dislike: "",
  },
  {
    nom: "Dana ",
    prenom: "Moore",
    image: "/uploads/0011.png",
    like: "2020",
    vote: "200",
    dislike: "",
  },
];

const CardData = [
  { title: "Vote max", icon: MdOutlineNavigateNext, libelle: "40%" },
  { title: "Connecter", icon: MdOutlineEventNote, libelle: "1000K" },
  { title: "Candidate", icon: BiSolidUser, libelle: "100" },
  { title: "Electeur", icon: BiSolidUser, libelle: "1000M" },
];
export default function Home() {
  return (
    <Main>
      <div className="h-full w-full m-4 flex flex-wrap items-start justify-start rounded-tl grid-flow-col auto-cols-max gap-4 overflow-y-scroll">
        <div className="container items-center px-4 py-8 m-auto mt-5">
          <div className="flex flex-wrap pb-3 mx-4 md:mx-24 lg:mx-0">
            <ul className="w-full sm:w-4/5 text-xs sm:text-sm justify-center lg:justify-end items-center flex flex-row space-x-1 mt-6 overflow-hidden mb-4">
              <li>
                <button className="px-4 py-2 bg-indigo-500 rounded-full text-sm text-gray-100 hover:bg-indigo-700 hover:text-gray-200">
                  Activer le vote
                </button>
              </li>
              <li>
                <button className="px-4 py-2 bg-gray-200 rounded-full text-sm text-gray-700 hover:bg-indigo-700 hover:text-gray-200">
                  90 days
                </button>
              </li>
            </ul>
            {CardData.map((item, key) => (
              <Card
                key={key}
                title={item.title}
                Icone={item.icon}
                libelle={item.libelle}
              />
            ))}
          </div>
          <Tableau data={dataCandidat} thead={thead}/>
        </div>
      </div>
      
    </Main>
  );
}
