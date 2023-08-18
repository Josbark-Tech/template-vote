"use client";

import React, { useEffect } from "react";
import {
  collection,
  // addDoc,
  query,
  onSnapshot,
  // deleteDoc,
  // doc,
  /*getDoc,
  querySnapshot,
 */
} from "firebase/firestore";
import { db } from "../../firebase";

import appStore from "../../state/data";
import Main from "../components/layouts/Page";
import Tableau from "../components/candidat/Tableau";
import Form from "../components/candidat/Form";

const thead = [
  { title: "CANDIDAT " },
  { title: "NOMBRE DE VOTE " },
  { title: "NOMBRE DE J'AIME " },
  { title: "ACtion possible" },
];

const dataCandidat = [
  {
    nom: "Vera ",
    prenom: "Carpenter",
    image: "/uploads/001.png",
    like: "2020",
    vote: "200",
    dislike: "",
  },
  {
    nom: "Vera ",
    prenom: "Carpenter",
    image: "/uploads/005.png",
    like: "2020",
    vote: "200",
    dislike: "",
  },
  {
    nom: "Vera ",
    prenom: "Carpenter",
    image: "/uploads/006.png",
    like: "2020",
    vote: "200",
    dislike: "",
  },
  {
    nom: "Vera ",
    prenom: "Carpenter",
    image: "/uploads/008.png",
    like: "2020",
    vote: "200",
    dislike: "",
  },
  {
    nom: "Alonzo ",
    prenom: "Carpenter",
    image: "/uploads/009.png",
    like: "2020",
    vote: "200",
    dislike: "",
  },
  {
    nom: "Dana ",
    prenom: "Moore",
    image: "/uploads/0011.png",
    like: "2020",
    vote: "200",
    dislike: "",
  },
];

export default function Candidat() {
  // const [isLoading, setIsLoading] = useState(true);
  // const [items, setItems] = useState([ ]);
  const { setCandidat, candidat, setLoadingCandidat, loadingCandidat } =
    appStore();

  useEffect(() => {
    // setIsLoading(true);
    setLoadingCandidat({ isLoading: true });
    const q = query(collection(db, "candidates"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let itemsArr = [];
      //console.log(querySnapshot);
      querySnapshot.forEach((doc) => {
        itemsArr.push({ ...doc.data(), id: doc.id });
      });
      // setItems(itemsArr);
      setCandidat({ data: itemsArr });
      // setIsLoading(false);
      setLoadingCandidat({ isLoading: false });

      return () => unsubscribe();
    });
  }, [setCandidat, setLoadingCandidat]);
  return (
    <Main>
      <div className="h-full w-full m-4 flex flex-wrap items-start justify-start rounded-tl grid-flow-col auto-cols-max gap-4 overflow-y-scroll">
        <div className="container items-center px-4 py-8 m-auto mt-5">
          <div className="flex flex-wrap ">
            <div className="mx-4">
              {" "}
              <Tableau
                items={candidat}
                isLoading={loadingCandidat}
                thead={thead}
              />
            </div>

            <Form data={dataCandidat} />
          </div>
        </div>
      </div>
    </Main>
  );
}
