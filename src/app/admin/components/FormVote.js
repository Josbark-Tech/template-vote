/* eslint-disable indent */
import React, { useState } from "react";
import * as Yup from "yup";
import Lottie from "react-lottie";
import { useFormik, Form, FormikProvider } from "formik";
import appStore from "../../state/data";
import PaymentMethod from "@/app/config/payment.module";
import CheckPaymentStatus from "@/app/config/check.payment.module";
import lottieEchec from "../../../../public/animation_echec.json";
import lottieProcess from "../../../../public/animation_process.json";
import lottiesuccess from "../../../../public/animation_successfull.json";
// import lottieProcess1 from "../../../../public/animation_process1.json";

// import {
//   collection,
//   addDoc,
// query,
// onSnapshot,
// deleteDoc,
// doc,
/*getDoc,
  querySnapshot,*/
// } from "firebase/firestore";

// import { db } from "../../firebase";

export default function FormVote() {
  const { CandidatElu, setShowModalFormElection } = appStore();
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [showLottie, setShowLottie] = useState(false);
  const [nomLottie, setNomLottie] = useState(lottieProcess);
  const [messageErreur, setMessageErreur] = useState("");
  const [stepProcess, setStepProcess] = useState(2);


  // .matches(/^(\+243|0)[0-9]{9}$/g, "+243813030011 ou 0813030011")
  const registerSchema = Yup.object().shape({
    nom: Yup.string().trim().required("champs obligatoire"),
    phone: Yup.string()
      .trim()
      .matches(/[0-9]{9}$/g, "813030011 ou 813030011")
      .required("Numéro de téléphone requis"),
    nombreVote: Yup.number("Saisir un caracterè numérique Ex:20")
      .integer("Veuillez saisir un nombre entier")
      .positive("Veuillez saisir un nombre positif")
      .min(1, "Minum 1")
      .required("champs obligatoire"),
  });

  const toWait = (duration) => {
    const timeout = Date.now();
    while (Date.now() - timeout < duration) {}
  };

  const processPaiement = async (dataCode) => {
    console.log("Transaction  avec succès. ", dataCode);
    console.log(`Transaction  avec succès. ${dataCode.orderNumber}`);

    const result = await CheckPaymentStatus(dataCode.orderNumber);

    if (result.data.code === "0") {
      const { data } = result;
      console.log("data 0 ");
      console.log("message 0", data.message);
      const { transaction } = data;
      console.log("Status ", transaction.status);
      if (transaction.status === "0") {
       
        console.log("La transaction est traiter avec succès");
        setMessageErreur("La transaction est traiter avec succès");
        setNomLottie(lottiesuccess);
      } else if (transaction.status === "1") {
        console.log("La transaction qui n’a pas abouti");
        setStepProcess(1);
        setMessageErreur("La transaction qui n’a pas abouti");
        setNomLottie(lottieEchec);
      } else if (transaction.status === "2") {
        console.log("Avant 5 sec", dataCode.orderNumber);
        console.log("Le paiement est en attente");
        setStepProcess(2);
        setMessageErreur("Le paiement est en attente");
        toWait(5000);
        processPaiement(dataCode);
      } else if (transaction.status === "3") {
        console.log("Le paiement va être remboursé au client");
      } else if (transaction.status === "4") {
        console.log("Le paiement a été remboursé au client");
      } else if (transaction.status === "5") {
        console.log("La transaction a été annulée par le marchand");
      }
    } else if (result.data.code === "1") {
      console.log("message 1", data.message);
    }
    console.log("Finis");
  };

  const verirication = (responseResult) => {
    const { data } = responseResult;

    switch (data.code) {
      case "0":
        processPaiement(data);
        break;
      case "1":
        processPaiement(data);
        // code block
        break;
      default:
      // code block
    }
  };
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
        setShowLottie(true);
        let montant = parseInt(data.nombreVote) * 500;
        const response_payment = await PaymentMethod(
          data.phone,
          montant,
          CandidatElu?.id
        );
        console.log(response_payment);
        setLoader(false);
        verirication(response_payment);
        // await addDoc(collection(db, "votes"), {
        //   id_cand: CandidatElu?.id,
        //   phone: data.phone,
        //   nomElecteur: data.nom,
        //   nombreVote: data.nombreVote,
        // });

        // setShowModalFormElection({ show: false });
      } catch (error) {
        setError(
          "Une erreur est survenue lors de la soumission \n du formulaire veuilllez verifier votre connexion internet et \n réessayer"
        );
        console.log(error);
      }
    },
  });

  const { errors, touched, getFieldProps, handleSubmit, values } = formik;

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: nomLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <FormikProvider value={formik}>
      <div className=" p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        {showLottie ? (
          <div className="container mx-auto px-4 sm:px-8">
            <label
              className={` text-lg  background-transparent font-bold  px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 ${
                stepProcess === 2 ? "text-black " : "text-red-500"
              }`}
            >
              {messageErreur}
            </label>

            {/* <Lottie options={defaultOptions} className="w-full" /> */}
            <Lottie options={defaultOptions} height={400} width={400} />
            {!Boolean(stepProcess === 2) && (
              <div className="block mb-2">
                <button
                  className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-base px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setShowModalFormElection({ show: false })}
                >
                  Retour
                </button>
              </div>
            )}
          </div>
        ) : (
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
                <label className="block mb-2 text-medium font-medium text-gray-900 dark:text-white">
                  Votre numéro de téléphone
                </label>

                <div className="flex  justify-items-center justify-center ">
                  <label
                    for=""
                    style={{ paddingTop: "1rem" }}
                    // className="text-medium font-medium text-gray-900 dark:text-white"
                  >
                    +243
                  </label>
                  <input
                    className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                    type="text"
                    value={values.phone}
                    //onChange={handleChange}
                    {...getFieldProps("phone")}
                    placeholder="Votre numéro de téléphone (Ex:815500011)"
                    required
                  />
                </div>

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
                <label className="text-base  font-bold text-stone-950 background-transparent font-bold  px-6 py-2  outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                  1 (Un) vote vaut 500Fc et 10 (dix) votes 5.000FC
                </label>
                <button
                  className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-base px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setShowModalFormElection({ show: false })}
                >
                  Annuler
                </button>
                <div className="w-1.5"></div>
                <div>
                  {loader ? (
                    <button
                      disabled
                      type="submit"
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-base px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    >
                      <svg
                        aria-hidden="true"
                        role="status"
                        class="inline w-4 h-4 mr-3 text-white animate-spin"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="#E5E7EB"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                  ) : (
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-base px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="submit"
                    >
                      Valider
                    </button>
                  )}
                </div>
              </div>
            </Form>
            {/* </form> */}
          </div>
        )}
      </div>
    </FormikProvider>
  );
}
