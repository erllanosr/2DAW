var boton_agregar = document.getElementById("btn_insertar");
var boton_eliminar = document.getElementById("btn_eliminar");
var boton_modificar = document.getElementById("btn_modificar");
var boton_verTabla = document.getElementById("btn_verTabla");

// Hacerlo con switch¿?
// si no elige el web_radio, alerta¿?

boton_agregar.addEventListener("click", function insertar_bd() {
  if ($("#web_radio").is(":checked")) {
    insertar();
  } else if ($("#index_radio").is(":checked")) {
    insertar_index();
  }
});
boton_eliminar.addEventListener("click", function eliminar_bd(id) {
  if ($("#web_radio").is(":checked")) {
    eliminarUsuario();
  } else if ($("#index_radio").is(":checked")) {
    eliminar_usuario_index(this.id);
  }
});
boton_modificar.addEventListener("click", function modificar_bd(id) {
  if (!$("#web_radio").is(":checked") || !$("#index_radio").is(":checked")) {
    alert("Por favor, elige una BD para ver.");
  } else if ($("#web_radio").is(":checked")) {
    modificarUsuario();
  } else if ($("#index_radio").is(":checked")) {
    modificar_usuario_index(this.id);
  }
});

boton_verTabla.addEventListener("click", function ver_tabla() {
  if (!$("#web_radio").is(":checked") && !$("#index_radio").is(":checked")) {
    alert("Por favor, elige una BD para ver.");
  } else if ($("#web_radio").is(":checked")) {
    consultar();
  } else if ($("#index_radio").is(":checked")) {
    consultar_index();
  }
});
