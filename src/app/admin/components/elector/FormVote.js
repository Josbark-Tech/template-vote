import React, { useState } from "react";
import appStore from "../../../state/data";

export default function FormVote() {
  const { setElecteurPotentielNom, setElecteurPotentielPhone,CandidatElu, setShowModalFormElection,} = appStore();

  const [electeur, setElecteur] = useState({
    nom: "",
    phone: "",
  });


  const saveVote=()=>{
    console.log(CandidatElu)
    console.log(CandidatElu)
    console.log(electeurPotentielNom,electeurPotentielPhone)
    setShowModalFormElection({ show: false })
  }
  
  return (
    <div className=" w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div className="container mx-auto px-4 sm:px-8">
        <form className="space-y-6" action="#">
          <div>
            <label
              for=""
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Votre nom
            </label>
            <input
              className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
              type="text"
              value={electeur.nom}
              onChange={(e) => {
                setElecteur({ ...electeur, nom: e.target.value });
                setElecteurPotentielNom({ nom: electeur.nom });
              }}
              placeholder="Entrez votre nom"
              required
            />
          </div>
          <div>
            <label
              for="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Votre numéro de téléphone
            </label>
            <input
              className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
              type="text"
              value={electeur.phone}
              onChange={(e) => {
                setElecteur({ ...electeur, phone: e.target.value });
                setElecteurPotentielPhone({ phone: electeur.phone });
              }}
              placeholder="Votre numéro de téléphone"
              required
            />
          </div>
          <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
            <button
              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => setShowModalFormElection({ show: false })}
            >
              Close
            </button>
            <button
              className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={saveVote}
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
