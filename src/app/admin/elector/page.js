"use client";

import React from "react";

import Main from "../components/layouts/Page";
import Tableau from "../components/Tableau";

export default function Candidate() {
  return (
    <Main>
      <div className="h-full w-full m-4 flex flex-wrap items-start justify-start rounded-tl grid-flow-col auto-cols-max gap-4 overflow-y-scroll">
        <div className="container items-center px-4 py-8 m-auto mt-5">
          <Tableau />
          <div className="flex flex-wrap pb-3 mx-4 md:mx-24 lg:mx-0">
            
          </div>
        </div>
      </div>
    </Main>
  );
}
