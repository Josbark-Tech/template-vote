"use client";

import React from "react";
import Siderbar from "./Sidebar";
import Header from "./Header";
// import Cookies from "js-cookie";
// import { useRouter ,NextRouter} from "next/router";
// import { Link } from "react-router-dom";
// import Search from "./Search";

export default function Page({ children }) {
  // var router = useRouter();
  // var isLogin = Cookies.get("loggedin");

  return (
    <div className="h-screen w-full bg-white relative flex overflow-hidden">
      <Siderbar />
      <div className="w-full h-full flex flex-col justify-between">
        <Header />
        <main className="max-w-full h-full flex relative overflow-y-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
