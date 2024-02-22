import React from 'react'

export default function Carousel() {
  return (
    <div className="max-w-2xl mx-auto">

    <div id="default-carousel" className="relative " data-carousel="static">
     
    <div className="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96 ">

            {/* <!-- Item 1 --> */}
            <div id="carousel-item" className="hidden duration-700 ease-in-out flex items-center justify-center" data-carousel-item>
                <div className="absolute inset-0  bg-[#D93B65]  rounded-lg p-12">
                    <span className="text-2xl font-semibold text-white text-center">"¡Amo estos botones! 😍 Son tan lindos y bien hechos. ¡Agregaron el toque perfecto a mi proyecto de costura! Definitivamente compraré más pronto. 💖✨"<br></br><span className="text-gray-200">Por: Lucy123</span></span>
                </div>
            </div>
            {/* <!-- Item 2 --> */}
            <div  id="carousel-item" className="hidden duration-700 ease-in-out flex items-center justify-center" data-carousel-item>
                <div className="absolute inset-0  bg-[#BFA595] rounded-lg p-12">
                    <span className="text-2xl font-semibold text-white text-center">"¡Las cremalleras que compré aquí son increíbles! 🌟 ¡Deslizamiento suave y calidad superior! Hicieron que coser fuera una brisa. ¡Altamente recomendado! 👍🧵"<br></br><span className="text-gray-200">Por: CraftyKate</span></span>
                </div>
            </div>
            {/* <!-- Item 3 --> */}
            <div  id="carousel-item"  className="hidden duration-700 ease-in-out flex items-center justify-center" data-carousel-item>
                <div className="absolute inset-0  bg-[#485B73] rounded-lg p-12">
                    <span className="text-2xl font-semibold text-white text-center">"¡Las hebillas que pedí son exactamente lo que necesitaba para mi proyecto de diseño de moda! 😊 ¡Son elegantes y duraderas! ¡Definitivamente impresionarán a mis clientes! 💼👗"<br></br><span className="text-gray-200">Por: FashionistaFrankie</span></span>
                </div>
            </div>
            {/* <!-- Item 4 --> */}
            <div  id="carousel-item" className="hidden duration-700 ease-in-out flex items-center justify-center" data-carousel-item>
                <div className="absolute inset-0  bg-[#D93B65]  rounded-lg p-12">
                    <span className="text-2xl font-semibold text-white text-center">"¡No puedo creer lo suaves y hermosos que son los productos de piel de esta tienda! 😱 ¡La calidad es excepcional y el servicio al cliente es excelente! ¡Estoy encantado! 💯👌"<br></br><span className="text-gray-200">Por: LeatherLover123</span></span>
                </div>
            </div>
            {/* <!-- Item 5 --> */}
            <div  id="carousel-item"  className="hidden duration-700 ease-in-out flex items-center justify-center" data-carousel-item>
                <div className="absolute inset-0  bg-[#485B73]  rounded-lg p-12">
                    <span className="text-2xl font-semibold text-white text-center">"¡Los botones que recibí son tan adorables! 🌸 ¡Le dieron un toque único a mi proyecto de manualidades! ¡Definitivamente volveré por más! ¡Gracias por el excelente servicio! 🎨✂️"<br></br><span className="text-gray-200">Por: ArtsyAnna</span></span>
                </div>
            </div>
        </div>
        {/* <!-- Slider indicators --> */}
        <div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
            <button id="carousel-slide-to" type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 1"
                data-carousel-slide-to="0"></button>
            <button id="carousel-slide-to" type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2"
                data-carousel-slide-to="1"></button>
            <button id="carousel-slide-to" type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3"
                data-carousel-slide-to="2"></button>
            <button id="carousel-slide-to" type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4"
                data-carousel-slide-to="3"></button>
            <button id="carousel-slide-to" type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5"
                data-carousel-slide-to="4"></button>
        </div>
        {/* <!-- Slider controls --> */}
        <button type="button"
            className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
            data-carousel-prev>
            <span
               className="inline-flex justify-center items-center w-8 h-8 dark:group-hover:bg-white[opacity]  group-focus:ring-4 group-focus:ring-white[opacity] ">
               <svg className="w-5 h-5 text-white[opacity] sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                </svg>
                <span className="hidden">Previous button</span>
            </span>
        </button>
        <button id="carousel-next" type="button"
            className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
            data-carousel-next>
            <span
                className="inline-flex justify-center items-center w-8 h-8 dark:group-hover:bg-white[opacity]  group-focus:ring-4 group-focus:ring-white[opacity] ">
                <svg className="w-5 h-5 text-white[opacity] sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
                <span className="hidden">Next</span>
            </span>
        </button>
    </div>

    <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>
</div>


  )
}
