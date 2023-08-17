"use client";

import React from "react";

import Main from "../components/layouts/Page";
import Tableau from "../components/Tableau";
import Form from "../components/candidat/Form";

export default function Candidat() {
  return (

    <Main>
      <div class="h-full w-full m-4 flex flex-wrap items-start justify-start rounded-tl grid-flow-col auto-cols-max gap-4 overflow-y-scroll">
        <div class="container items-center px-4 py-8 m-auto mt-5">
          <div class="flex flex-wrap ">
            <div className="mx-4"> <Tableau /></div>
           
            <Form />
          </div>
        </div>
      </div>
    </Main>
  );
}
