import Image from "next/image";
import Link from "next/link";

export default function Header(){
  return(
    <header className="header">
      <div className="container mx-auto px-6 container-header">
        <h1>
          <Image
            className="logo"
            src={'/img/logo_the_gospel_voice.png'}
            width={150}
            height={100}
            alt="Logo the gospel voice"
          />
        </h1>
        <nav className="nav">
          <ul>
            <li> <Link href={'/'}>  Accueil </Link></li>
            <li> <Link href={'/about'}>  A-propos </Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}