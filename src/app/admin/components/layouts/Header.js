"use client";

import React from "react";
// import { Link } from "react-router-dom";
// import Search from "./Search";

export default function Header() {
  return (
    <header className="h-16 w-full flex items-center relative justify-end px-5 space-x-10 bg-gray-800">
      {/* <!-- Informação --> */}
      <div className="flex flex-shrink-0 items-center space-x-4 text-white">
        {/* <!-- Texto --> */}
        <div className="flex flex-col items-end ">
          {/* <!-- Nome --> */}
          <div className="text-md font-medium ">Jacokash</div>
          {/* <!-- Título --> */}
          <div className="text-sm font-regular">Admni</div>
        </div>
        {/* <!-- Foto --> */}
        <div className="h-10 w-10 rounded-full cursor-pointer bg-gray-200 border-2 border-blue-400"></div>
      </div>
    </header>
  );
}
