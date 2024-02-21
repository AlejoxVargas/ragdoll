import React from 'react';

const ProductDetail = () => {
  // Supongamos que tienes una variable que almacena la cantidad disponible del producto
  const quantityAvailable = 1;

  return (
    <div className="container mx-auto py-8 px-4">
    
      <div className="my-8">
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2 md:pr-8 mb-4 md:mb-0">
            <img src="/images/tela.png" alt="Product" className="w-full" />
          </div>
          <div className="w-full md:w-1/2">
            <h1 className="text-2xl font-semibold mb-2">Tela variada </h1>
            <p className="text-gray-700 mb-4">Precio: 10 euros</p>
            <p className="text-gray-700 mb-4">
              Description: Se trata de varias telas de varios tamaños que en total son como 200g de tela. 
              Hay suficiente para hacer una camiseta.
            </p>
            {/* Mostrar la cantidad disponible del producto */}
            <p className="text-gray-700 mb-4">Quantity available: {quantityAvailable}</p>
            <div className="flex items-center mb-4">
            <button className="bg-customPink hover:bg-pink-800 text-white font-bold py-2 px-4 mr-2 rounded">
  Comprar
</button>

              <button className="text-gray-700 hover:text-red-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
