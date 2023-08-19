import React from "react";
import appStore from "../../state/data";
import Form from "./FormVote";

export default function Modal() {
  //const [showModal, setShowModal] = React.useState(false);
  // const { showModalFormElection,CandidatElu, setShowModalFormElection,
  const { showModalFormElection, CandidatElu } = appStore();

  return (
    <>
      {showModalFormElection && (
        <>
          <div style={{ position:'absolute',top:0,left:0,bottom:0,right:0}} className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto w-3xl" style={{ width: '659px',height: '559px'}}>
              {/* <div className="relative w-auto my-6 mx-auto max-w-3xl"> */}
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Je vote {CandidatElu?.prenom} {CandidatElu?.nom}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModalFormElection({ show: false })}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <Form />
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </>
  );
}
