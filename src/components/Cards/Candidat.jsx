import Image from "next/image";

export default function Candidat({img, name, number}){

  return (
    <div className="card--candidat m-2 bg-[#4290EC] text-white text-3xl">
      <Image
        className="mb-4"
        src={img}
        alt={name}
        width={500}
        height={500}
      />
      <h2 className="p-2">{name}</h2>
      <p className="p-2 w-fit">N {number}</p>
    </div>
  )

}