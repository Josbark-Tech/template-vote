'use client'

import React, { useState } from "react";
// import { GetServerSideProps, NextPage } from "next";
// import path from "path";
// import fs from "fs/promises";
// import axios from "axios";
import {
  collection,
  addDoc,
  // query,
  // onSnapshot,
  // deleteDoc,
  // doc,
  /*getDoc,
  querySnapshot,
 */
} from "firebase/firestore";
// import data from "../../../api/upload"
import { db } from "../../../firebase";

export default function Form() {
  //const [uploading, setUploading] = useState(false);
  //const [selectedImage, setSelectedImage] = useState("");
  //const [selectedFile, setSelectedFile] = useState();

  const [candidates, SetCandidate] = useState([]);
  const [newItem, setNewItem] = useState({
    nom: "",
    prenom: "",
    image: "",
    aime: 0,
    vote: 0,
  });

  //fonction  uploading
  // const handleUpload = async () => {
  //   setUploading(true);
  //   try {
  //     if (!selectedFile) return;
  //     const data = new FormData();
  //     data.set('file', selectedFile)
      
  //     const res = await fetch('../../../api/upload',{
  //       method:'POST',
  //       body: data
  //     });
  //     console.log(res);

  //     if(!res.ok){
  //       throw new Error(await res.text());
  //     }else{
  //       setUploading(false);
  //     }

  //   } catch (error) {
  //     console.log(error);
  //   }
  //   console.log(uploading)
    
  // };
  // Add candidat to database
  const addItem = async (e) => {
    try {
      e.preventDefault();

      SetCandidate([...candidates, newItem]);

      if (newItem.nom !== "" && newItem.prenom !== "") {
        //console.log(newItem);
        SetCandidate([...candidates, newItem]);
        await addDoc(collection(db, "candidates"), {
          nom: newItem.nom.trim(),
          prenom: newItem.prenom.trim(),
          image: "/uploads/image_default.png",
          aime: 0,
          vote: 0,
        });
        setNewItem({ nom: "", prenom: "", aime: 0, vote: 0 });
      }
    } catch (e) {}
  };
  return (
    <section className=" w-full max-w-lg  bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
      <div className="bg-white dark:bg-gray-900">
        <div className="max-w-2xl px-4 mx-auto ">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            Ajouter un candidat
          </h2>
          <form action="#">
            {/* <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5"> */}
            <div className=" mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
              <div className="lg:col-span-2 flex">
                {/* <div className="mx-2">
                  {selectedImage ? (
                    <img
                      className="w-10 h-10  rounded"
                      src={selectedImage}
                      alt="Medium large avatar"
                    />
                  ) : (
                    <img
                      className="w-10 h-10  rounded"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                      alt="Medium large avatar"
                    />
                  )}
                </div>
                <div>
                  <input
                    onClick={handleUpload}
                    onChange={({ target }) => {
                      if (target.files) {
                        const file = target.files[0];
                        setSelectedImage(URL.createObjectURL(file));
                        setSelectedFile(file);
                      }
                    }}
                    className="block w-full text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    id="file_input"
                    type="file"
                  />
                </div> */}
              </div>
              <div>
                <div className="flex py-3 items-center justify-center w-full">
                  <label
                    // for="dropzone-file"
                    className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      {/* <IoPersonAddSharp size={36} className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" /> */}
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span>{" "}
                        or drag and drop
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                      </p>
                    </div>
                    <input id="dropzone-file" type="file" className="hidden" />
                  </label>
                </div>
              </div>
            </div>
            <div className="flex items-center my-2 space-x-4">
              <div className="w-full">
                <label
                  // for="price"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Votre prénom
                </label>

                <input
                  className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                  type="text"
                  value={newItem.prenom}
                  onChange={(e) =>
                    setNewItem({ ...newItem, prenom: e.target.value })
                  }
                  placeholder="prénom"
                  required
                />
              </div>
            </div>
            <div className="flex items-center my-2 space-x-4">
              <div className="w-full">
                <label
                  // for="price"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Votre nom
                </label>

                <input
                  className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                  type="text"
                  value={newItem.nom}
                  onChange={(e) =>
                    setNewItem({ ...newItem, nom: e.target.value })
                  }
                  placeholder="Nom"
                  required
                />
              </div>
            </div>
            <div className="flex  justify-center items-center my-2  space-x-4">
              {/* <button
                type="button"
                className="text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
              >
                Modifier
              </button> */}
              <button
                onClick={addItem}
                type="button"
                className="px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Ajouter
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
// export const getServerSideProps = async () => {
//   const props = { dirs: [] };
//   try {
//     const dirs = await fs.readdir(path.join(process.cwd(), "/public/images"));
//     props.dirs = dirs ;
//     return { props };
//   } catch (error) {
//     return { props };
//   }
// };
