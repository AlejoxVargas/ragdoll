import React from "react";

export function Footer() {
    return(
        <footer className="mt-20 xl:mt-32 mx-auto w-full relative text-center bg-[#d93b65] text-white">
        <div className="px-6 py-8 md:py-14 xl:pt-20 xl:pb-12">
            <h2 className="font-bold text-3xl xl:text-4xl leading-snug">
                Listo para subir tus retales<br></br>Empieza ahora, el planeta lo necesita.
            </h2>
            <a className="mt-8 xl:mt-12 px-12 py-5 text-lg font-medium leading-tight inline-block bg-[#d93b65] rounded-full shadow-xl border border-transparent hover:bg-[#d93b65] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-999 focus:ring-sky-500"
                href="#">Comenzar</a>
            <div className="mt-14 xl:mt-20">
                <nav className="flex flex-wrap justify-center text-lg font-medium">
                    <div className="px-5 py-2"><a href="#">Contact</a></div>
                    <div className="px-5 py-2"><a href="#">Pricing</a></div>
                    <div className="px-5 py-2"><a href="#">Privacy</a></div>
                    <div className="px-5 py-2"><a href="#">Terms</a></div>
                    <div className="px-5 py-2"><a href="#">Twitter</a></div>
                </nav>
                <p className="mt-7 text-base">© 2024</p>
            </div>
        </div>
    </footer>
    
    )
}

export default Footer;