var user = document.getElementById("usuario");
var clave = document.getElementById("clave");
var web_radio = document.getElementById("web_radio");
var index_radio = document.getElementById("index_radio");
var boton_insertar = document.getElementById("btn_insertar");
var boton_eliminar = document.getElementById("btn_eliminar");
var boton_modificar = document.getElementById("btn_modificar");
var boton_consultar = document.getElementById("btn_consultar");

// Establecer nombre de la base de datos, versión, grupo de conexiones, tamaño
var webbd = window.openDatabase("datos.db", "1.0", null, 20000);

// crear tabla
webbd.transaction(function (tr) {
  tr.executeSql("create table usuarios(_id integer primary key autoincrement,nombre text,clave text)");
});

// Agregar, eliminar y modificar el formato webbd.executeSql ("instrucción sql", [parámetro])

//VALIDACIONES
const alertas = () => {
  if (user.value == "" || clave.value == "") {
    // Que no hayan campos vacíos
    alert("No pueden haber campos vacíos");
  } else if (!$("#web_radio").is(":checked") && !$("#index_radio").is(":checked")) {
    alert("Por favor, elige una BD.");
  } else if ($("#web_radio").is(":checked")) {
    function insertar() {
      webbd.transaction(function (tr) {
        console.log(tr); // Una SQLTransaction {}
        tr.executeSql("insert into usuarios (nombre, clave) values (?,?)", [user.value, clave.value]);
      });
    }
    insertar();
    alert("Usuario añadido correctamente¡!");
  }
};

// HAcer un switch¿?

// Attaching the click event on the button
$(document).on("click", "#btn_insertar", alertas);
// $(document).on("click", "#btn_consultar", alertStatus);

// Insertar datos
// Esta función debe estar dentro de un if, pero cómo¿?
// Eliminar la base de datos
function borrarDatos() {
  webbd.transaction(function (tr) {
    tr.executeSql("drop table usuarios");
  });
}
function eliminarUsuario(id) {
  webbd.transaction(function (tr) {
    tr.executeSql("delete from usuarios where _id=?", [id]);
  });
}

// Modificar los datos
function modificar(id, nuevoNombre, nuevaClave) {
  webbd.transaction(function (tr) {
    tr.executeSql("update usuarios set nombre=?,clave=? where _id=?", [nuevoNombre, nuevaClave, id]);
  });
}

// Consultar datos
function consultar() {
  webbd.transaction(function (tr) {
    // resultado devuelve una matriz
    tr.executeSql("select * from usuarios", [], function (tr, result) {
      console.log(result);
      var contenido = "";
      contenido += "<hr/>";
      contenido += "<table>";
      contenido += "<thead>";
      contenido += "<tr>";
      contenido += "<th>" + "id#" + "</th>";
      contenido += "<th>" + "Usuario" + "</th>";
      contenido += "<th>" + "Clave" + "</th>";
      contenido += "<th>" + "" + "</th>";
      contenido += "<th>" + "" + "</th>";
      contenido += "</tr>";
      contenido += "</thead>";
      for (var i = 0; i < result.rows.length; i++) {
        let valor = result.rows[i];
        contenido += "<tbody>";
        contenido += "<tr>";
        contenido += "<td>" + valor._id + "</td>";
        contenido += "<td>" + valor.nombre + "</td>";
        contenido += "<td>" + valor.clave + "</td>";
        contenido += "<td class='botones'>" + "<button><i class='bi bi-pencil'></i></button>" + "</td>";
        contenido +=
          "<td class='botones'>" +
          "<button onclick='eliminarUsuario(valor._id)'><i class='bi bi-trash'></i></button>" +
          "</td>";
        contenido += "</tr>" + "</tbody>";
        // +"." + dd.nombre + " --- " + dd.clave + "</table>";
      }
      contenido += "</table>";
      $("#demo").html(contenido);
    }); //tr.executeSql
  });
}

{
  /* <i data-feather="heart"></i>
<i data-feather="feather"></i> */
}
