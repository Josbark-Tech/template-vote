"use client";

import React from "react";
import Siderbar from "./Sidebar";
import Header from "./Header";
// import { Link } from "react-router-dom";
// import Search from "./Search";

export default function Page() {
  return (
    // <!-- component -->
    <div class="h-screen w-full bg-white relative flex overflow-hidden">
      <Siderbar />
      <div class="w-full h-full flex flex-col justify-between">
        {/* <!-- Header --> */}
        <Header />
        {/* <!-- Main --> */}
        <main class="max-w-full h-full flex relative overflow-y-hidden">
          {/* <!-- Container --> */}
          <div class="h-full w-full m-4 flex flex-wrap items-start justify-start rounded-tl grid-flow-col auto-cols-max gap-4 overflow-y-scroll">
            {/* <!-- Container --> */}
            <div class="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400"></div>
            <div class="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400"></div>
            <div class="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400"></div>
            <div class="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400"></div>
            <div class="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400"></div>
            <div class="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400"></div>
            <div class="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400"></div>
            <div class="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400"></div>
            <div class="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400"></div>
          </div>
        </main>
      </div>
    </div>
  );
}
