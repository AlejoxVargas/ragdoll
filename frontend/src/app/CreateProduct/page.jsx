"use client";
import { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const CreateBuyPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    tags: "",
    description: "",
    price: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("title", formData.title);
      formDataToSend.append("tags", formData.tags);
      formDataToSend.append("description", formData.description);
      formDataToSend.append("price", formData.price);
      formDataToSend.append("image", formData.image_url);

      const response = await fetch("http://localhost:8000/sells", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        console.error("Error al crear la compra");
      }
    } catch (error) {
      console.error("Error al crear la compra:", error);
    }
  };

  return (
    <div>
      <Navbar/>
      
      <h1>Crear Compra</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Etiquetas</label>
          <input
            type="text"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Descripción</label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Precio</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Imagen</label>
          <input type="file" name="image" onChange={handleChange} />
        </div>
        <button type="submit">Crear Compra</button>
      </form>

      <Footer/>
    </div>
  );
};

export default CreateBuyPage;
