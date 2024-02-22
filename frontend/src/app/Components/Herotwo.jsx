import Link from "next/link";

export default function Hero() {
  return (
    <div data-testid="hero-container" className="relative mt-20">
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center space-y-4">
        <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
          Rag Doll
        </h1>
        <p className="text-xl text-white opacity-50 max-w-lg text-center">
          Todo lo que necesitas para crear tus proyectos.
        </p>
        <div className="flex flex-col sm:flex-row gap-4"></div>
      </div>

      <video autoPlay muted loop className="w-full h-full object-cover">
        <source src="/v2.mp4" type="video/mp4" />
        <Link
            href="/Form"
            className="group relative flex h-80 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg "
          ></Link>
      </video>
    </div>
  );
}
