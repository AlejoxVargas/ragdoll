"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";
import Hero from '@/app/Components/Hero'
import Navbar from "./Navbar";

const ColoresFondo = ["bg-[#D93B65]", "bg-[#485B73]", "bg-[#BFA595]", "bg-[#D93B65]"];

const URI = "http://localhost:8000/sells/"; // Define la URL base de la API aquí

export default function Card() {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(10);
    
    useEffect(() => {
        async function fetchProducts() {
          try {
            const response = await axios.get("http://localhost:8000/sells");
            setProducts(response.data);
          } catch (error) {
            console.error("Error fetching products:", error);
          }
        }
        fetchProducts();
      }, []);

    const deleteSell = async (id) => {
        try {
            await axios.delete(`${URI}${id}`); // Usa la URL completa para eliminar la venta
            setProducts(products.filter(product => product.id !== id)); // Actualiza el estado para reflejar el cambio
        } catch (error) {
            console.error('Error deleting sell:', error);
        }
    };

    // Calcula el índice del último producto en la página actual
    const indexOfLastProduct = currentPage * productsPerPage;
    // Calcula el índice del primer producto en la página actual
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    // Obtiene los productos de la página actual
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    // Cambia de página
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Retrocede una página
    const prevPage = () => {
        setCurrentPage((prev) => prev - 1);
    };

    // Avanza una página
    const nextPage = () => {
        setCurrentPage((prev) => prev + 1);
    };

    return (
        <div className="bg-[#F2F2F2]">
            <Navbar/>
            <Hero/>            
            <section className="container mx-auto p-10 md:py-12 px-0 md:p-8 md:px-0 bg-[#F2F2F2]">
                <section className="p-5 md:p-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 grid-flow-row gap-3 items-start">
                    {currentProducts.map((product) => (
                        <section key={product.id} className={`p-5 py-10 ${ColoresFondo[Math.floor(Math.random() * ColoresFondo.length)]} text-center transform duration-500 hover:-translate-y-2 cursor-pointer`}>
                            <img src={`${product.image_url}`} alt={`${product.title}`} />
                            <div className="space-x-1 flex justify-center mt-10">
                                {/* SVG elements */}
                            </div>
                            <div className="text-black">
                                <h1 className="text-3xl my-5">{product.title}</h1>
                                <p className="mb-5">{product.description}</p>
                                <h2 className="font-semibold mb-5">{product.price}</h2>
                            </div>
                            <button className="p-2 px-6 bg-[#A62139] text-white rounded-md hover:bg-[rgba(166,33,57,0.5)]">Ver</button>
                            <button onClick={() => deleteSell(product.id)} className="p-2 px-6 bg-[#A62139] text-white rounded-md hover:bg-[rgba(166,33,57,0.5)]">Borrar</button>
                        </section>
                    ))}
                </section>
                {/* Paginación */}
                <div className="flex justify-center mt-4">
                    <button
                        onClick={prevPage}
                        disabled={currentPage === 1}
                        className="px-3 py-1 bg-gray-200 rounded-l hover:bg-gray-400"
                    >
                        {"<"}
                    </button>
                    {Array.from({ length: Math.ceil(products.length / productsPerPage) }, (_, i) => (
                        <button
                            key={i}
                            onClick={() => paginate(i + 1)}
                            className={`px-3 py-1 bg-gray-200 ${currentPage === i + 1 ? 'bg-gray-400' : 'hover:bg-gray-400'}`}
                        >
                            {i + 1}
                        </button>
                    ))}
                    <button
                        onClick={nextPage}
                        disabled={currentPage === Math.ceil(products.length / productsPerPage)}
                        className="px-3 py-1 bg-gray-200 rounded-r hover:bg-gray-400"
                    >
                        {">"}
                    </button>
                </div>
            </section>
        </div>
    );
}
