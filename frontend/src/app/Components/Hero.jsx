import React from "react";
import Images from 'next/image'
import Link from "next/link";

function Hero() {
    return(
        <main className="dark:bg-gray-800 bg-white relative overflow-hidden h-screen">
            
         <div className="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
            <div className="container mx-auto px-6 flex relative py-16">
                <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
                    <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12">
                    </span>
                    <h1 className="font-bebas-neue text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                        RagDoll
                        <span className="text-base sm:text-7xl text-[#d93b65]">
                            Telita con nosotros
                        </span>
                    </h1>
                    <p className="text-sm sm:text-base text-gray-700 dark:text-white">
                    "Somos una comunidad de costura sostenible donde intercambiamos retales, botones y más. En lugar de dinero, utilizamos 'botones' ganados al intercambiar excedentes para obtener lo que necesitamos. Únete a nosotros y haz moda de manera consciente."
                    </p>
                    <div className="flex mt-8">
                        <a href="#" className="uppercase py-2 px-4 rounded-lg bg-[#d93b65] border-2 border-transparent text-white text-md mr-4 hover:bg-[#a62139]">
                            Quiero vender
                        </a>
                        <a href="#" className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-[#d93b65] text-[#d93b65] dark:text-white hover:bg-[#a62139] hover:border-[#a62139] hover:text-white text-md">
                           Quiero comprar
                        </a>
                    </div>
                </div>
                <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
                   <Images
                   src="/images/image1.jpg"
                   alt="Logo de RagDoll"
                   className="dark:invert max-w-xs md:max-w-sm m-auto"
                   width={384}
                   height={384}
                   priority
                   ></Images>
                    
                    {/* <img src="../public/images/maniqui.png" className="max-w-xs md:max-w-sm m-auto"/> */}
                </div>
            </div>
        </div>
    </main>
    
    )
}

export default Hero