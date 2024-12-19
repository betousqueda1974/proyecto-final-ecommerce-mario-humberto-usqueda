const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let v_mensaje = "";

  const nombre = document.querySelector("#nombre");
  const apellido = document.querySelector("#apellido");
  const telefono = document.querySelector("#telefono");
  const email = document.querySelector("#email");
  const consulta = document.querySelector("#consulta");

  const errorNombre = document.querySelector(".mensajevalidar");

  if (nombre.value == "" || nombre.value == null) {
    nombre.style.border = "1px solid red";
    v_mensaje = v_mensaje + " un nombre";
  }
    else
  {
    nombre.style.border = "1px solid dodgerblue";
  }


  if (apellido.value == "" || apellido.value == null) {
    apellido.style.border = "1px solid red";
    v_mensaje = v_mensaje + " un apellido";
  }
  else
  {
    apellido.style.border = "1px solid dodgerblue";
  }


  if (telefono.value == "" || telefono.value == null) {
    telefono.style.border = "1px solid red";
    v_mensaje = v_mensaje + " un teléfono"; 
  }
  else
  {
    telefono.style.border = "1px solid dodgerblue";
  }


  if (email.value == "" || email.value == null) {
    email.style.border = "1px solid red";
    v_mensaje = v_mensaje + " un email";
  }
  else
  {
    email.style.border = "1px solid dodgerblue";
  }


  if (consulta.value == "" || consulta.value == null) {
    consulta.style.border = "1px solid red";
    v_mensaje = v_mensaje + " una consulta";
  }
  else
  {
    consulta.style.border = "1px solid dodgerblue";
  }

  if (v_mensaje != ""){
    errorNombre.textContent = "Debe ingresar " + v_mensaje;
  }
  else
  {
    form.submit();
  }
});