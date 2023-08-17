'use client'

import { useState } from 'react'
import Image from "next/image";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

export default function Header(){
    
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const baseStyleMobile =
    "font-light p-5 text-2xl text-white ";
  const baseStyle =
    "font-bold  text-white hover:border-b-2 border-white hover:border-white  text-white border-b-2 text-white";
  const hoverStyleMobile = "hover:text-white font-normal  p-5 text-2xl";
  const hoverStyle = "hover:text-white font-normal text-white";

  return(
    <header className="header">
      <div className="mx-auto px-6 container-header">
        <h1>
          <Image
            className="logo"
            src={'/img/logo_the_gospel_voice.png'}
            width={150}
            height={100}
            alt="Logo the gospel voice"
          />
        </h1>
        <nav className="nav max-[576px]:invisible text-white">
          <ul>
            <li> <Link href={'/'}>  Accueil </Link></li>
            <li> <Link href={'/about'}>  A-propos </Link></li>
          </ul>
        </nav>
        <div onClick={toggleMenu} className="min-[577px]:hidden flex">
          {
            isOpen == true ? <IoMdClose size={36} className="text-white" /> :
              <HiOutlineMenuAlt2 size={36} className="text-white" />
          }
        </div>
      </div>
      {isOpen == true ? (
        <div className="bg-color-footer h-70 text-white menu-sm">
          <ul className="gap-6">
            <li
              onClick={() => {
                setActive("home");
                toggleMenu();
              }}
              className={
                active == "home" ? baseStyleMobile : hoverStyleMobile
              }
            >
              <Link href="/">Accueil</Link>
            </li>
            <li
              onClick={() => {
                setActive("about");
                toggleMenu();
              }}
              className={
                active == "about" ? baseStyleMobile : hoverStyleMobile
              }
            >
              <Link href="/about">A-propos</Link>
            </li>
           
          </ul>
        </div>
      ) : null}
    </header>
  )
}