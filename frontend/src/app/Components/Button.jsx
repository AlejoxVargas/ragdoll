import React from "react";

function Button({ text }) {
    return (
        <button 
            data-ripple-light="true" 
            type="button" 
            className="select-none rounded-lg bg-[#a62139] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-[#310d14]/20 transition-all hover:shadow-lg hover:shadow-[#310d14]/40 focus:opacity-[0.95] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
            {text}
        </button>
    );
}

export default Button;