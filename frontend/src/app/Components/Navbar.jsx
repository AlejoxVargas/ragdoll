import React from 'react';
import Image from "next/image"; 

function Navbar() {
  return (
    <div> 
         <nav class="bg-[#a62139] text-white py-3 px-4 flex items-center justify-between">
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
          <div class="flex items-center">
            
               
              <a class="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700" href="#">Home</a>
              <a class="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700" href="#">About</a>
              <a class="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700" href="#">Contact</a>
          </div>
      </nav>
    </div>
  );
}

export default Navbar;
