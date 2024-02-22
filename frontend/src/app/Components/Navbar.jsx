"use client"
import React, { useState } from 'react';
import Image from "next/image";
import Link from 'next/link';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="bg-[#a62139] text-white py-3 px-4">
      <div className="container mx-auto flex items-center justify-between">
        <a href="/">
          <Image
            src="/LogoBlanco.svg"
            alt="Logo de RagDoll"
            className="dark:invert"
            width={250}
            height={24}
            priority
          />
        </a>
        {/* Enlaces para la versión web */}
        <ul className="hidden md:flex items-center space-x-6">
          <li>
            <a className="text-sm" href="#">Home</a>
          </li>
          <li>
            <a className="text-sm" href="#">About</a>
          </li>
          <li>
            <a className="text-sm" href="#">Contact</a>
          </li>
          <Link
              
              href="/About"
              className="hover:underline"
            >
              About
            </Link>
        </ul>
        {/* Menú desplegable para la versión móvil */}
        <div className='nav-toggle md:hidden' onClick={toggleNav} role="button" aria-expanded={isNavOpen} aria-controls="nav-links">
          <img src="/menuhamburguesa.svg" alt="Menú" width={24} height={24} />
        </div>
      </div>
      {/* Menú desplegable */}
      {isNavOpen && (
        <div className="container mx-auto md:hidden">
          <ul className="flex flex-col items-center bg-[#a62139] text-white py-3">
            <li>
              <a className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700" href="/">Home</a>
            </li>
            <li>
              <a className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700" href="/about">About</a>
            </li>
            <li>
              <a className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700" href="#">Contact</a>
            </li>
            
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
