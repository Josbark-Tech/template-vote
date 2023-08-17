"use client";

import React from "react";

import Main from "../components/layouts/Page";
import Tableau from "../components/Tableau";

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
    image: "uploads/001.png",
    like: "2020",
    dislike: "",
  },
  {
    nom: "Vera ",
    prenom: "Carpenter",
    image: "uploads/005.png",
    like: "2020",
    dislike: "",
  },
  {
    nom: "Vera ",
    prenom: "Carpenter",
    image: "uploads/006.png",
    like: "2020",
    dislike: "",
  },
  {
    nom: "Vera ",
    prenom: "Carpenter",
    image: "uploads/008.png",
    like: "2020",
    dislike: "",
  },
  {
    nom: "Alonzo ",
    prenom: "Carpenter",
    image: "uploads/009.png",
    like: "2020",
    dislike: "",
  },
  {
    nom: "Dana ",
    prenom: "Moore",
    image: "uploads/0011.png",
    like: "2020",
    dislike: "",
  },
];

export default function Candidate() {
  return (
    <Main>
      <div className="h-full w-full m-4 flex flex-wrap items-start justify-start rounded-tl grid-flow-col auto-cols-max gap-4 overflow-y-scroll">
        <div className="container items-center px-4 py-8 m-auto mt-5">
          <Tableau data={dataCandidat} thead={thead}/>
          <div className="flex flex-wrap pb-3 mx-4 md:mx-24 lg:mx-0">
            
          </div>
        </div>
      </div>
    </Main>
  );
}
