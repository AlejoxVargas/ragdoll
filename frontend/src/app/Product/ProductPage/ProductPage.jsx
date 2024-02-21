import React from 'react';

const ProductPage = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-wrap items-center">
        <div className="w-full md:w-1/2 md:pr-8 mb-4 md:mb-0">
          <img src="/product-image.jpg" alt="Product" className="w-full" />
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl font-semibold mb-2">Product Title</h1>
          <p className="text-gray-700 mb-4">Price: $99.99</p>
          <p className="text-gray-700 mb-4">
            Description: Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <div className="flex items-center mb-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded">
              Add to Cart
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
  );
};

export default ProductPage;
