function validar() {
  var claveUno = document.getElementById("claveUno").value;
  var claveDos = document.getElementById("claveDos").value;
  var boton_enviar = document.getElementById("boton_enviar");

  if (claveUno === "" || claveDos === "") {
    alert("Todos los campos son obligatorios, por favor, rellénalos.");
  } else if (claveUno.length < 8 || claveDos.length > 16) {
    alert("La contraseña debe tener como mínimo 8 caracteres y máximo 16.");
  }
}
