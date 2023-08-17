import Header from '@/components/commons/header'
import '../../styles/scss/main.scss'
import Footer from '@/components/commons/footer'
import Image from 'next/image'
import Candidat from '@/components/Cards/Candidat';

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    name: 'Breakfast',
    number: 4,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    name: 'Burger',
    number: 4,
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    name: 'Camera',
    number: 4,
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    name: 'Coffee',
    number: 4,
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    name: 'Hats',
    number: 4,
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    name: 'Honey',
    number: 4,
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    name: 'Basketball',
    number: 4,
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    name: 'Fern',
    number: 4,
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    name: 'Mushrooms',
    number: 4,
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    name: 'Tomato basil',
    number: 4,
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    name: 'Sea star',
    number: 4,
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    name: 'Bike',
    number: 4,
  },
];

export default function Home() {
  return( <>
    <Header />
    <main>
      <section className="container--intro flex items-center max-[576px]:p-4 mb-2">
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
      <section className='container container--candidats flex justify-items-center justify-center min-[577px]:p-4'>
        <div className='flex flex-wrap justify-between'>
          {itemData.map((item, key) => (
            <Candidat key={key} {...item} />
          ))}
        </div>
      </section>
    </main>
    <Footer />
  </>)
  ;
}
