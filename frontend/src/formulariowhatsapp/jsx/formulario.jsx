import React, { useState } from 'react';

function Reservas() {
  const [cliente, setCliente] = useState('');
  const [empleado, setEmpleado] = useState('EMPLEADO 1'); // Empleado predeterminado
  const [servicio, setServicio] = useState('AUDITORIA-GRATIS'); // Servicio predeterminado
  const [respuesta, setRespuesta] = useState('');

  const handleClick = (e) => {
    e.preventDefault();

    // INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
    const telefono = "699701100";

    const resp = document.querySelector("#respuesta");

    resp.classList.remove("fail");
    resp.classList.remove("send");

    const url = `https://api.whatsapp.com/send?phone=${telefono}&text=
          *_MI NEGOCIO_*%0A
          *Reservas*%0A%0A
          *¿Cómo te llamas?
          ${cliente}%0A
          *Correo electrónico*%0A
          ${correo}%0A
          *¿Qué consulta quieres realizar?*%0A
          ${servicio}`;

    if (cliente === "" || fecha === "" || hora === "") {
      setRespuesta(`Faltan algunos datos, ${cliente}`);
      resp.classList.add("fail");
      return false;
    }
    setRespuesta(`Se ha enviado tu reserva, ${cliente}`);
    resp.classList.remove("fail");
    resp.classList.add("send");

    window.open(url);
  };

  return (
    <form className="formulario">
      <img src="imgLogo.jpg" alt="Logo" className="imgLogo" />

      <h1 className="formulario__titulo">RAG DOLL</h1>
      <h3 className="formulario__subtitulo">Consultas</h3>
      <p className="formulario__parrafo">
        Rellena este formulario para realizar tu consulta
      </p>

      <label htmlFor="cliente" className="formulario__label">¿Cómo te llamas?</label>
      <input
        id="cliente"
        type="text"
        className="formulario__input"
        placeholder="Nombre completo"
        value={cliente}
        onChange={(e) => setCliente(e.target.value)}
      />

      
      <label htmlFor="correo" className="formulario__label">Correo electrónico</label>
      <select
        id="correo"
        className="formulario__input"
        value={correo}
        onChange={(e) => setCorreo(e.target.value)}
      >
        <option>Correo 1</option>
        <option>Correo 2</option>
      </select>

      <label htmlFor="consulta" className="formulario__label">¿Qué consulta quieres realizar?</label>
      <select
        id="consulta"
        className="formulario__input"
        value={consulta}
        onChange={(e) => setConsulta(e.target.value)}
      >
        <option>BOTONES</option>
        <option>HILOS</option>
        <option>RETALES</option>
        <option>CREMALLERAS</option>
        <option>PRENDAS USADAS</option>
      </select>

      <div id="respuesta">{respuesta}</div>

      <button id="submit" className="formulario__submit" onClick={handleClick}>Enviar a WhatsApp</button>
    </form>
  );
}

export default Reservas;
