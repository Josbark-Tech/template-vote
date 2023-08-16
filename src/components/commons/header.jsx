import Image from "next/image";
import Link from "next/link";

export default function Header(){
  return(
    <header className="header p-4">
      <h1>
        <Image
          src='/img/logo_the_gospel_voice.png'
          width={200}
          height={200}
        />
      </h1>
      <nav className="nav">
        <ul>
          <li> <Link href={'/'}>  Accueil </Link></li>
          <li> <Link href={'/about'}>  A-propos </Link></li>
        </ul>
      </nav>
    </header>
  )
}