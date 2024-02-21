import React from "react";

const ProductCard = ({ title, description, price, imageUrl }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 py-4">
        <span className="text-gray-700 text-base">Price: ${price}</span>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const ProductList = () => {
  const products = [
    {
      id: 1,
      title: "Product 1",
      description: "Description of Product 1",
      price: 19.99,
      imageUrl: "https://via.placeholder.com/300",
    },
    {
      id: 2,
      title: "Product 2",
      description: "Description of Product 2",
      price: 29.99,
      imageUrl: "https://via.placeholder.com/300",
    },
    // Add more products here
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {products.map((product) => (
        <div key={product.id} className="m-4">
          <ProductCard {...product} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
