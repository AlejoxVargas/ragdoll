document.querySelector("#submit").addEventListener("click", e => {
    e.preventDefault();
  
    //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
    const telefono = "699701100";
  
    const cliente = document.querySelector("#cliente").value;
    const correo = document.querySelector("#correo").value;
    const servicio = document.querySelector("#servicio").value;
    const consulta = document.querySelector("#consulta").value;
    const resp = document.querySelector("#respuesta");
  
    resp.classList.remove("fail");
    resp.classList.remove("send");
  
    const url = `https://api.whatsapp.com/send?phone=${telefono}&text=
          *_MI NEGOCIO_*%0A
          *Nombre completo*%0A%0A
          *¿Cómo te llamas?
          *Correo electrónico
          ${correo}%0A
          *¿Qué consulta quieres realizar?*%0A
          ${consulta}`;
  
    if (cliente === "" || fecha === "" || hora === "") {
      resp.classList.add("fail");
      resp.innerHTML = `Faltan algunos datos, ${cliente}`;
      return false;
    }
    resp.classList.remove("fail");
    resp.classList.add("send");
    resp.innerHTML = `Se ha enviado tu reserva, ${cliente}`;
  
    window.open(url);
  });