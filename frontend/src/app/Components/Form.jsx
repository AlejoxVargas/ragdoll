"use client"
import React, { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({
    vendedorId: '',
    nombreProducto: '',
    tags: '',
    descripcion: '',
    precio: '',
    nombre: '',
    email: '',
    telefono: '',
    imagenes: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImagenesChange = (e) => {
    setFormData({
      ...formData,
      imagenes: e.target.files,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos del formulario a tu backend
    console.log(formData);
  };

  return (
    <div className="flex items-center justify-center p-12 bg-[#F2F2F2]">
     <div className="mx-auto w-full max-w-[750px] bg-[#F2F2F2]"> 
        <form onSubmit={handleSubmit}>
          {/* <div className="mb-5">
            <label htmlFor="vendedorId" className="mb-3 block text-base font-medium text-gray-900">
              ID del Vendedor
            </label>
            <input
              type="text"
              name="vendedorId"
              id="vendedorId"
              value={formData.vendedorId}
              onChange={handleChange}
              placeholder="Ingrese el ID del Vendedor"
              className="w-full rounded-md border border-gray-300 bg-white py-3 px-4 text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
          </div> */}
          <div className="mb-5">
            <label htmlFor="nombreProducto" className="mb-3 block text-base font-medium text-gray-900">
              Nombre del Producto
            </label>
            <input
              type="text"
              name="nombreProducto"
              id="nombreProducto"
              value={formData.nombreProducto}
              onChange={handleChange}
              placeholder="Ingrese el Nombre del Producto"
              className="w-full rounded-md border border-gray-300 bg-white py-3 px-4 text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="tags" className="mb-3 block text-base font-medium text-gray-900">
              Tags
            </label>
            <input
              type="text"
              name="tags"
              id="tags"
              value={formData.tags}
              onChange={handleChange}
              placeholder="Ingrese los Tags"
              className="w-full rounded-md border border-gray-300 bg-white py-3 px-4 text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="descripcion" className="mb-3 block text-base font-medium text-gray-900">
              Descripción del Producto
            </label>
            <textarea
              name="descripcion"
              id="descripcion"
              value={formData.descripcion}
              onChange={handleChange}
              placeholder="Ingrese la Descripción del Producto"
              rows="4"
              className="w-full rounded-md border border-gray-300 bg-white py-3 px-4 text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="precio" className="mb-3 block text-base font-medium text-gray-900">
              Precio
            </label>
            <input
              type="number"
              name="precio"
              id="precio"
              value={formData.precio}
              onChange={handleChange}
              placeholder="Ingrese el Precio"
              className="w-full rounded-md border border-gray-300 bg-white py-3 px-4 text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="nombre" className="mb-3 block text-base font-medium text-gray-900">
              Nombre
            </label>
            <input
              type="text"
              name="nombre"
              id="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Ingrese su Nombre"
              className="w-full rounded-md border border-gray-300 bg-white py-3 px-4 text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="mb-3 block text-base font-medium text-gray-900">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Ingrese su Email"
              className="w-full rounded-md border border-gray-300 bg-white py-3 px-4 text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="telefono" className="mb-3 block text-base font-medium text-gray-900">
              Teléfono
            </label>
            <input
              type="text"
              name="telefono"
              id="telefono"
              value={formData.telefono}
              onChange={handleChange}
              placeholder="Ingrese su Teléfono"
              className="w-full rounded-md border border-gray-300 bg-white py-3 px-4 text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="imagenes" className="mb-3 block text-base font-medium text-gray-900">
              Imágenes
            </label>
            <input
              type="file"
              name="imagenes"
              id="imagenes"
              multiple
              onChange={handleImagenesChange}
              className="w-full rounded-md border border-gray-300 bg-white py-3 px-4 text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="hover:shadow-form w-full rounded-md bg-indigo-600 py-3 px-8 text-center text-base font-semibold text-white outline-none"
          >
            Enviar
          </button>
        </form>
      </div> 
    </div>
  );
}

export default Form;
