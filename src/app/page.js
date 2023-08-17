import Image from 'next/image'


export default function Home() {
  return (
    <main className=''>
      <section className="container--intro flex items-center mobile-down:p-4">
        <div className='container--intro--txt p-8 text-white'>
          <div className='name_competition'>
            <h2 className='uppercase mb-8'>
                The Gospel Voice
            </h2>
            <p></p>
          </div>
          <p>
            A la recherche des meilleurs tallents Gospel dans les differentes villes de la Republique Democratique du Congo
          </p>

        </div>
        <div className='container--intro--img'>
          <Image
            src="/img/singer.jpg"
            width={600}
            height={600}
            alt='Chanteur avec un micro'
            style={{objectFit: "cover"}}
          />
        </div>
      </section>
    </main>
  )
}
