import React, { useState } from 'react';

function Reservas() {
  const [cliente, setCliente] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
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
          *¿Cuándo quieres reservar?*%0A
          ${fecha}%0A
          *¿A qué hora quieres reservar?*%0A
          ${hora}%0A
          *Empleado de preferencia*%0A
          ${empleado}%0A
          *¿Qué servicio quieres realizar?*%0A
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

      <h1 className="formulario__titulo">DIGYTIPY</h1>
      <h3 className="formulario__subtitulo">Reservas</h3>
      <p className="formulario__parrafo">
        Rellena este formulario para agendar tu cita en DIGYTIPY
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

      <label htmlFor="fecha" className="formulario__label">¿Cuándo quieres reservar?</label>
      <input
        id="fecha"
        type="date"
        className="formulario__input"
        value={fecha}
        onChange={(e) => setFecha(e.target.value)}
      />

      <label htmlFor="hora" className="formulario__label">¿A qué hora quieres reservar?</label>
      <input
        id="hora"
        type="time"
        className="formulario__input"
        value={hora}
        onChange={(e) => setHora(e.target.value)}
      />

      <label htmlFor="empleado" className="formulario__label">Empleado de preferencia</label>
      <select
        id="empleado"
        className="formulario__input"
        value={empleado}
        onChange={(e) => setEmpleado(e.target.value)}
      >
        <option>EMPLEADO 1</option>
        <option>EMPLEADO 2</option>
      </select>

      <label htmlFor="servicio" className="formulario__label">¿Qué servicio quieres realizar?</label>
      <select
        id="servicio"
        className="formulario__input"
        value={servicio}
        onChange={(e) => setServicio(e.target.value)}
      >
        <option>AUDITORIA-GRATIS</option>
        <option>GESTION RRSS</option>
        <option>PAGINA WEB</option>
        <option>PUBLICIDAD EN RRSS</option>
        <option>SEO/SEM</option>
      </select>

      <div id="respuesta">{respuesta}</div>

      <button id="submit" className="formulario__submit" onClick={handleClick}>Enviar a WhatsApp</button>
    </form>
  );
}

export default Reservas;
