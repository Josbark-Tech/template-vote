import React from "react";
import { collection, addDoc } from "firebase/firestore";

export default function Home() {
  const [item, setItem] = useState([
    { name: "CoffeePost", price: 4.96 },
    { name: "Movie", price: 24.96 },
    { name: "candy", price: 7.96 },
  ]);
  //Ajouter dans la dase de donné
  const addItem = async (event) => {};
  return (
    <>
      <h1>Bonjour</h1>
    </>
  );
}
