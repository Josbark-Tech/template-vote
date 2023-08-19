/* eslint-disable indent */
// import Image from "next/image";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function Candidat({handleClick,item}) {

  return (
    <>
      <div className="max-w-lg m-4 rounded overflow-hidden shadow-lg cursor-pointer" onClick={()=>{handleClick(item)} }>
      <LazyLoadImage
          src={item.image}
          alt={item.prenom}
          width={500}
          loading="lazy"
          effect="blur"
          height={500}
          className="w-full"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-3xl mb-2 "> {item.prenom} {item.nom}</div>
          
        </div>
        <div className="px-6 pt-4 pb-2">
          {/* <h2 className="p-2">
            {item.prenom} {item.nom}
          </h2> */}
          {/* 
          eader .container-header .logo {
    width: 127%;
    height: 33%;
}
          <p className="p-2 w-fit">Nombre de vote {item.vote}</p> */}
          {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #photography
          </span> */}
          <span className="text-xl  inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #Music
          </span>
          <span className=" text-xl inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #Gospel voice
          </span>
        </div>
      </div>
    </>
  );
}
