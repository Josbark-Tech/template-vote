"use client";

import React from "react";
import Siderbar from "./Sidebar";
import Header from "./Header";
// import { Link } from "react-router-dom";
// import Search from "./Search";

export default function Page({ children }) {
  return (
    // <!-- component -->
    <div className="h-screen w-full bg-white relative flex overflow-hidden">
      <Siderbar />
      <div className="w-full h-full flex flex-col justify-between">
        {/* <!-- Header --> */}
        <Header />
        {/* <!-- Main --> */}

        <main className="max-w-full h-full flex relative overflow-y-hidden">
          {/* <!-- Container --> */}
          {children}
          
        </main>
      </div>
    </div>
  );
}
