import React from "react";
import { BsQuestion } from "react-icons/bs";
import { AiOutlineMinusCircle } from "react-icons/ai";

export default function Card({ title, libelle, Icone }) {
  return (
    <div className="w-full p-2 lg:w-1/4 md:w-1/2">
      <div className="flex flex-col px-6 py-10 overflow-hidden bg-white hover:bg-gradient-to-br hover:from-purple-400 hover:via-blue-400 hover:to-blue-500 rounded-xl shadow-lg duration-300 hover:shadow-2xl group">
        <div className="flex flex-row justify-between items-center">
          <div className="px-4 py-4 bg-gray-300  rounded-xl bg-opacity-30">
            <Icone size={20} className="h-6 w-6 group-hover:text-gray-50" />
          </div>
          <div className="inline-flex text-sm text-gray-600 group-hover:text-gray-200 sm:text-base">
            <AiOutlineMinusCircle
              size={20}
              className="h-6 w-6 mr-2 text-green-500 group-hover:text-gray-200"
            />
            12%
          </div>
        </div>
        <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-gray-700 mt-12 group-hover:text-gray-50">
          {libelle}
        </h1>
        <div className="flex flex-row justify-between group-hover:text-gray-200">
          <p>{title}</p>
          <span>
            <BsQuestion
              size={20}
              className="h-5 w-5 text-indigo-600 group-hover:text-gray-200"
            />
          </span>
        </div>
      </div>
    </div>
  );
}
