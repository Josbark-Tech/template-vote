import React from "react";

import Image from "next/image";

export default function Tbody({ data }) {
  return (
    <tbody>
      {data.map((item, index) => (
        <tr key={index}>
          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <div className="flex items-center">
              <div className="flex-shrink-0 w-10 h-10">
                <Image
                  src={item.image}
                  alt="Vercel Logo"
                  className="w-full h-full rounded-full"
                  width={100}
                  height={100}
                  priority
                />
              </div>
              <div className="ml-3">
                <p className="text-gray-900 whitespace-no-wrap">
                  {item.prenom}
                </p>
              </div>
            </div>
          </td>
          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p className="text-gray-900 whitespace-no-wrap">{item.vote}</p>
          </td>
          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p className="text-gray-900 whitespace-no-wrap">{item.like}</p>
          </td>
          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <div className="flex items-center my-2  space-x-4">
              <button
                type="button"
                className="text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
              >
                Supprimer
              </button>
            </div>
          </td>
        </tr>
      ))}
      {/* 
      <tr>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <div className="flex items-center">
            <div className="flex-shrink-0 w-10 h-10">
              <Image
                src="/uploads/001.png"
                alt="Vercel Logo"
                className="w-full h-full rounded-full"
                width={100}
                height={100}
                priority
              />
              
            </div>
            <div className="ml-3">
              <p className="text-gray-900 whitespace-no-wrap">Vera Carpenter</p>
            </div>
          </div>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">100</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">2020</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
            <span
              aria-hidden
              className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
            ></span>
            <span className="relative">Bien</span>
          </span>
        </td>
      </tr>
      <tr>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <div className="flex items-center">
            <div className="flex-shrink-0 w-10 h-10">
              <Image
                src="/uploads/005.png"
                alt="Vercel Logo"
                className="w-full h-full rounded-full"
                width={100}
                height={100}
                priority
              />
            </div>
            <div className="ml-3">
              <p className="text-gray-900 whitespace-no-wrap">Blake Bowman</p>
            </div>
          </div>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">100</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">100</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
            <span
              aria-hidden
              className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
            ></span>
            <span className="relative">Bien</span>
          </span>
        </td>
      </tr>
      <tr>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <div className="flex items-center">
            <div className="flex-shrink-0 w-10 h-10">
              <Image
                src="/uploads/006.png"
                alt="Vercel Logo"
                className="w-full h-full rounded-full"
                width={100}
                height={100}
                priority
              />
            </div>
            <div className="ml-3">
              <p className="text-gray-900 whitespace-no-wrap">Dana Moore</p>
            </div>
          </div>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">100</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">100</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <span className="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
            <span
              aria-hidden
              className="absolute inset-0 bg-orange-200 opacity-50 rounded-full"
            ></span>
            <span className="relative">Moyenne</span>
          </span>
        </td>
      </tr>
      <tr>
        <td className="px-5 py-5 bg-white text-sm">
          <div className="flex items-center">
            <div className="flex-shrink-0 w-10 h-10">
              <img
                className="w-full h-full rounded-full"
                src="https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&h=160&w=160&q=80"
                alt=""
              />
            </div>
            <div className="ml-3">
              <p className="text-gray-900 whitespace-no-wrap">Alonzo Cox</p>
            </div>
          </div>
        </td>
        <td className="px-5 py-5 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">100</p>
        </td>
        <td className="px-5 py-5 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">18</p>
        </td>
        <td className="px-5 py-5 bg-white text-sm">
          <span className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
            <span
              aria-hidden
              className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
            ></span>
            <span className="relative"> Eliminé</span>
          </span>
        </td>
      </tr> */}
    </tbody>
  );
}
