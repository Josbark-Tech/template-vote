import React from "react";
import Loading from "../LoadingTable";
import Image from "next/image";
import appStore from "../../../state/data";

export default function Tbody({ isLoading, items }) {
  const { setShowModalFormElection,setIdCandidateElu } = appStore();

  // console.log(isLoading);
  //console.log(items);
  //console.log(data);

  function clickedVote(item) {
    //console.log(item);
    setShowModalFormElection({ show: true })
    setIdCandidateElu({ item: item })
  }
  return (
    <>
      {isLoading ? (
        <Loading nbre={4} />
      ) : (
        <tbody>
          {items.map((item, index) => (
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
                      {item.prenom} {item.nom}
                    </p>
                  </div>
                </div>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">{item.vote}</p>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">{item.aime}</p>
              </td>

              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div className="flex items-center my-2  space-x-4">
                  <button
                    type="button"
                    className="text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                  >
                    Supprimer
                  </button>
                  <button
                    onClick={() => {
                      console.log(index);
                    }}
                    type="button"
                    className="px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Modifier
                  </button>
                  <button
                    onClick={()=>{clickedVote(item)}}
                    type="button"
                    className="px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Je vote
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      )}
    </>
  );
}
