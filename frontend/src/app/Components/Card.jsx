import React from "react";
import Button from "./Button";

function Card() {
    return(
        <div class="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mt-9 mb-9">
            <div class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-[#485B73] to-[#2a3542]">
            </div>
            <div class="p-6">
                <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Tailwind card
                </h5>
                <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula. 
                </p>
            </div>
            <div className="p-6 pt-0 text-center">
            <div className="flex justify-center items-center gap-4">
                <Button text="Añadir" className="mr-4" />
                <Button text="Borrar" />
            </div>
        </div>
        </div>
    )
}

export default Card