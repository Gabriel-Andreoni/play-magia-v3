"use client";

import { useState } from 'react';
import Link from 'next/link';

import Logo from './img/play-magia-logo.png';
import Image from 'next/image';

export function Menu() {
  return (
    <header
    className={`w-full h-[110px] flex items-center sticky top-0 backdrop-blur-md shadow-lg  transition-[height] duration-300 shadow-slate-950/5 z-[1000]`}
    >
      <Image className="ml-6 rounded-full" width={100} height={100} src={Logo.src} alt="Logo da Play Magia" />
      <nav className="w-full h-full">
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
              href="/about"
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
