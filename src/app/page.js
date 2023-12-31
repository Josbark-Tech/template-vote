/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect } from "react";
import Header from "@/components/commons/header";
import "../../styles/scss/main.scss";
import Footer from "@/components/commons/footer";
import Image from "next/image";
import Candidat from "@/components/Cards/Candidat";
import LoadingComponent from "./loading";
import appStore from "./state/data";
import ModalElector from "./admin/components/Modal";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "./firebase";

export default function Home() {
  const {
    setIdCandidateElu,
    setCandidat,
    setShowModalFormElection,
    candidat,
    setLoadingCandidat,
    loadingCandidat,
  } = appStore();

  const handleClick = (item) => {
    setShowModalFormElection({ show: true });
    setIdCandidateElu({ item: item });
    // console.log(item);
  };

  useEffect(() => {
    //setShowModalFormElection({ show: true });
    setLoadingCandidat({ isLoading: true });
    const q = query(collection(db, "candidates"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let itemsArr = [];

      querySnapshot.forEach((doc) => {
        itemsArr.push({ ...doc.data(), id: doc.id });
      });

      setCandidat({ data: itemsArr });
      setLoadingCandidat({ isLoading: false });

      return () => unsubscribe();
    });
  }, [setCandidat, setLoadingCandidat]);

  return (
    <>
      <Header />
      <main>
        <section className="container--intro flex items-center max-[576px]:p-4 mb-2">
          <div className="container--intro--txt p-8 text-white">
            <div className="name_competition">
              <h2 className="uppercase mb-8">The Gospel Voice</h2>
              <p></p>
            </div>
            <p>
            À la recherche des meilleurs talents Gospel dans la ville de Mbanza-Ngungu, République Démocratique du Congo
            </p>
          </div>
          <div className="container--intro--img">
            <Image
              src="/img/singer.jpg"
              width={600}
              loading="lazy"
              height={600}
              alt="Chanteur avec un micro"
              style={{ objectFit: "cover" }}
            />
          </div>
        </section>
        {/* <section className="container container--candidats flex justify-items-center justify-center min-[577px]:p-4"> */}
        <section className="flex section">
          {loadingCandidat ? (
            <LoadingComponent />
          ) : (
            <>
              {/* <div className="flex flex-wrap justify-between"> */}
              <div className="flex flex-wrap">
                {candidat.map((item, key) => (
                  <Candidat
                    key={key}
                    item={item}
                    {...item}
                    handleClick={handleClick}
                  />
                ))}
              </div>
            </>
          )}
        </section>
      </main>
      <Footer />
      <ModalElector />
    </>
  );
}
