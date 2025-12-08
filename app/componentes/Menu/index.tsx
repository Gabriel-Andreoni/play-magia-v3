"use client";

import Link from 'next/link';

import Image from 'next/image';
import { useState } from 'react';

export function Menu() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
    className={`w-full h-[110px] flex items-center sticky top-0 backdrop-blur-md shadow-lg  transition-[height] duration-300 shadow-slate-950/5 z-[1000]`}
    >
      <Link href="/">
        <Image className="ml-6 rounded-full" width={100} height={100} src="/images/play-magia-logo.png" alt="Logo da Play Magia" />
      </Link>

      <button className="lg:hidden ml-auto mr-6" onClick={toggleMobileMenu}>
          <Image src="/images/menu.png" alt="Menu" width={40} height={40} />
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-[110px] left-0 w-full bg-[#4D5020] shadow-lg py-4 transition-all duration-300 ease-in-out backdrop-blur-lg">
          <ul className="flex flex-col items-center gap-4">
            <li className="list-none text-[1.2em] font-bold cursor-pointer">
              <Link
                href="/"
                className="text-white relative after:content-[''] after:absolute after:left-0 after:top-[110%] after:w-1/2 after:h-[2px] after:bg-[#4D5020] after:transition-all after:duration-300 hover:after:w-full"
                onClick={toggleMobileMenu}
              >
                Home
              </Link>
            </li>
            <li className="list-none text-[1.2em] font-bold cursor-pointer">
              <Link
                href="#sobre"
                className="text-white relative after:content-[''] after:absolute after:left-0 after:top-[110%] after:w-1/2 after:h-[2px] after:bg-[#4D5020] after:transition-all after:duration-300 hover:after:w-full"
                onClick={toggleMobileMenu}
              >
                Sobre Nós
              </Link>
            </li>
            <li className="list-none text-[1.2em] font-bold cursor-pointer">
              <Link
                href="/playgrounds"
                className="text-white relative after:content-[''] after:absolute after:left-0 after:top-[110%] after:w-1/2 after:h-[2px] after:bg-[#4D5020] after:transition-all after:duration-300 hover:after:w-full"
                onClick={toggleMobileMenu}
              >
                Playgrounds
              </Link>
            </li>
            <li className="list-none text-[1.2em] font-bold cursor-pointer">
              <Link
                href="/orcamento"
                className="text-white relative after:content-[''] after:absolute after:left-0 after:top-[110%] after:w-1/2 after:h-[2px] after:bg-[#4D5020] after:transition-all after:duration-300 hover:after:w-full"
                onClick={toggleMobileMenu}
              >
                Faça um Orçamento
              </Link>
            </li>
            <li className="list-none text-[1.2em] font-bold cursor-pointer">
              <Link
                href="#"
                className="text-white relative after:content-[''] after:absolute after:left-0 after:top-[110%] after:w-1/2 after:h-[2px] after:bg-[#4D5020] after:transition-all after:duration-300 hover:after:w-full"
                onClick={toggleMobileMenu}
              >
                Contato
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* Desktop Menu */}
      <nav className="hidden lg:flex w-full h-full">
        <ul className="w-full h-full flex justify-center items-center gap-[4em]">
          <li className="list-none text-[1.2em] font-bold cursor-pointer">
            <Link
              href="/"
              className="text-black relative after:content-[''] after:absolute after:left-0 after:top-[110%] after:w-1/2 after:h-[2px] after:bg-[#4D5020] after:transition-all after:duration-300 hover:after:w-full"
            >
              Home
            </Link>
          </li>
          <li className="list-none text-[1.2em] font-bold cursor-pointer">
            <Link
              href="#sobre"
              className="text-black relative after:content-[''] after:absolute after:left-0 after:top-[110%] after:w-1/2 after:h-[2px] after:bg-[#4D5020] after:transition-all after:duration-300 hover:after:w-full"
            >
              Sobre Nós
            </Link>
          </li>
          <li className="list-none text-[1.2em] font-bold cursor-pointer">
            <Link
              href="/playgrounds"
              className="text-black relative after:content-[''] after:absolute after:left-0 after:top-[110%] after:w-1/2 after:h-[2px] after:bg-[#4D5020] after:transition-all after:duration-300 hover:after:w-full"
            >
              Playgrounds
            </Link>
          </li>
          <li className="list-none text-[1.2em] font-bold cursor-pointer">
            <Link
              href="/orcamento"
              className="text-black relative after:content-[''] after:absolute after:left-0 after:top-[110%] after:w-1/2 after:h-[2px] after:bg-[#4D5020] after:transition-all after:duration-300 hover:after:w-full"
            >
              Faça um Orçamento
            </Link>
          </li>
          <li className="list-none text-[1.2em] font-bold cursor-pointer">
            <Link
              href="#"
              className="text-black relative after:content-[''] after:absolute after:left-0 after:top-[110%] after:w-1/2 after:h-[2px] after:bg-[#4D5020] after:transition-all after:duration-300 hover:after:w-full"
            >
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
