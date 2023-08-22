"use client";

import React from 'react';
import { BallTriangle } from "react-loader-spinner";

export default function LoadingComponent() {
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
        <div className=" ">
          <BallTriangle
            height="50"
            width="50"
            color="#FFFFFF"
            ariaLabel="loading"
          />
        </div>{" "}
      </div>
      <div className="fixed inset-0 z-40 bg-primary"></div>
    </>
  );
}
