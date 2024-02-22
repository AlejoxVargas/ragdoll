import Link from "next/link";


export default function Hero() {
  return (
    <div data-testid="hero-container" className="relative">
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col  justify-center pl-10 space-y-4">

      <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
          <span className="w-20 h-2 bg-white dark:bg-white mb-12">
          </span>
          <h1 className="font-bebas-neue text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-white">
              RagDoll
              <span className="text-base sm:text-7xl text-[#a62139]">
                  Telita con nosotros
              </span>
          </h1>
          <p className="text-sm sm:text-base text-white dark:text-white">
          "Somos una comunidad de costura sostenible donde intercambiamos retales, botones y más. En lugar de dinero, utilizamos 'botones' ganados al intercambiar excedentes para obtener lo que necesitamos. Únete a nosotros y haz moda de manera consciente."
          </p>
          <div className="flex mt-8">
            
              <Link href="/CreateProduct" className="uppercase py-2 px-4 rounded-lg bg-[#a62139] border-2 border-transparent text-white text-md mr-4 hover:bg-[#641423]">

                  Quiero vender
              </Link>
              <a href="#" className="uppercase py-2 px-4 rounded-lg bg-[#a62139] border-2 border-transparent text-white text-md mr-4 hover:bg-[#641423]">
                  Quiero comprar
              </a>
              
          </div>
      </div>


        {/* <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
          Rag Doll
        </h1>
        <p className="text-xl text-white opacity-50 max-w-lg text-center">
          Todo lo que necesitas para crear tus proyectos.
        </p>
        <div className="flex flex-col sm:flex-row gap-4"></div> */}
      </div>

      <video autoPlay muted loop className="w-full h-full object-cover">
        <source src="/video/v2.mp4" type="video/mp4" />
        <Link
            href="/Form"
            className="group relative flex h-80 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg "
          ></Link>
      </video>
    </div>
  );
}
