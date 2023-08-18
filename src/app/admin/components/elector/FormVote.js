import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik, Form, FormikProvider } from "formik";
import appStore from "../../../state/data";
import {
  collection,
  addDoc,
  // query,
  // onSnapshot,
  // deleteDoc,
  // doc,
  /*getDoc,
  querySnapshot,*/
} from "firebase/firestore";

import { db } from "../../../firebase";

export default function FormVote() {
  const { CandidatElu, setShowModalFormElection } = appStore();
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  const registerSchema = Yup.object().shape({
    nom: Yup.string().trim().required("champs obligatoire"),
    phone: Yup.string()
      .matches(/^(\+243|0)[0-9]{9}$/g, "+243813030011 ou 0813030011")
      .required("Numéro de téléphone requis"),
    nombreVote: Yup.number("Saisir un caracterè numérique Ex:20")
      .min(1, "Minum 1")
      .required("champs obligatoire"),
  });

  const formik = useFormik({
    initialValues: {
      nom: "",
      phone: "",
      nombreVote: "",
    },
    validationSchema: registerSchema,
    onSubmit: async (data) => {
      try {
        setLoader(true);
        console.log(loader, data);
        await addDoc(collection(db, "votes"), {
          id_cand: CandidatElu?.id,
          phone: data.phone,
          nomElecteur: data.nom,
          nombreVote: data.nombreVote,
        });

        setShowModalFormElection({ show: false });
      } catch (error) {
        setError("Une erreur est survenue lors de la soumission \n du formulaire veuilllez verifier votre connexion internet et \n réessayer");
        console.log(error);
      }
    },
  });

  const { errors, touched, getFieldProps, handleSubmit, values } = formik;

  return (
    <FormikProvider value={formik}>
      <div className=" p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="container mx-auto px-4 sm:px-8">
          {Boolean(error) && (
            <label className="text-sm  text-red-500 background-transparent font-bold  px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
              {error}
            </label>
          )}
          <Form
            className="space-y-6"
            autoComplete="off"
            noValidate
            onSubmit={handleSubmit}
          >
            {/* <form className="" action="#"> */}
            <div>
              <label
                for=""
                className="block mb-2 text-medium font-medium text-gray-900 dark:text-white"
              >
                Votre nom
              </label>

              <input
                className="appearance-none text-medium  border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                type="text"
                value={values.nom}
                //onChange={handleChange}
                {...getFieldProps("nom")}
                placeholder="Entrez votre nom"
                required
              />
              {Boolean(touched.nom && errors.nom) && (
                <label className="text-sm  text-red-500 background-transparent font-bold  px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                  {errors.nom}
                </label>
              )}
            </div>
            <div>
              <label
                for="password"
                className="block mb-2 text-medium font-medium text-gray-900 dark:text-white"
              >
                Votre numéro de téléphone
              </label>
              <input
                className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                type="text"
                value={values.phone}
                //onChange={handleChange}
                {...getFieldProps("phone")}
                placeholder="Votre numéro de téléphone"
                required
              />
              {Boolean(touched.phone && errors.phone) && (
                <label className="text-sm  text-red-500 background-transparent font-bold  px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                  {errors.phone}
                </label>
              )}
            </div>
            <div>
              <label
                for="password"
                className="block mb-2 text-medium font-medium text-gray-900 dark:text-white"
              >
                Nombre de vote
              </label>
              <input
                className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                type="text"
                value={values.nombreVote}
                // onChange={handleChange}
                {...getFieldProps("nombreVote")}
                placeholder="Saisir le nombre de vote"
                required
              />
              {Boolean(touched.nombreVote && errors.nombreVote) && (
                <label className="text-sm  text-red-500 background-transparent font-bold  px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                  {errors.nombreVote}
                </label>
              )}
            </div>
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <label className="text-sm  text-red-500 background-transparent font-bold  px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                1 (Un) vote vaut 500Fc et 10 (dix) votes 5.000FC
              </label>
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModalFormElection({ show: false })}
              >
                Annuler
              </button>
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="submit"
              >
                Valider
              </button>
              
            </div>
          </Form>
          {/* </form> */}
        </div>
      </div>
    </FormikProvider>
  );
}
