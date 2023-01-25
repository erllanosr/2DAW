// https://developer.mozilla.org/es/docs/Web/API/IndexedDB_API
//https://www.ionos.es/digitalguide/paginas-web/desarrollo-web/indexeddb/
//https://es.javascript.info/indexeddb

var user = document.getElementById("usuario");
var clave = document.getElementById("clave");
var web_radio = document.getElementById("web_radio");
var index_radio = document.getElementById("index_radio");
var boton_insertar = document.getElementById("btn_insertar");
var boton_eliminar = document.getElementById("btn_eliminar");
var boton_modificar = document.getElementById("btn_modificar");
var boton_consultar = document.getElementById("btn_consultar");

var db;
let openRequest = indexedDB.open("indexDB", 3);
//let deleteRequest = indexedDB.deleteDatabase("idbdwec")
openRequest.onerror = function () {
  console.error("Error", openRequest.error);
};

openRequest.onsuccess = function () {
  db = openRequest.result;
  // continúa trabajando con la base de datos usando el objeto db
  console.info("Base de datos creada con éxito¡!");
};

function insertar() {
  let transaction = db.transaction("usuarios", "readwrite"); // (1)
  console.log("conectado");

  // obtiene un almacén de objetos para operar con él
  let usuarios = transaction.objectStore("usuarios"); // (2)
  console.log("lista creada");
  let usuario = {
    id: "3",
    nombre: "pepe",
    clave: "12321asd3",
  };
  console.log("usuario creado");

  let request = usuarios.add(usuario); // (3)
  console.log("usuario en listado");
  request.onsuccess = function () {
    // (4)
    console.log("Usuario agregado", request.result);
  };

  request.onerror = function () {
    console.log("Hay un error", request.error);
  };
}
// Eliminar la base de datos
function borrarDatos() {
  var request = db.transaction("usuarios", "readwrite").objectStore("usuarios").delete("2");
  request.onsuccess = function (event) {
    // It's gone!
    console.info("Eliminado");
  };
}

// Modificar los datos
function modificar() {
  var objectStore = db.transaction("usuarios", "readwrite").objectStore("usuarios");
  var request = objectStore.get("2");
  request.onerror = function (event) {
    // Handle errors!
    console.info("Se ha producido un error!");
  };
  request.onsuccess = function (event) {
    // Get the old value that we want to update
    var data = request.result;

    // update the value(s) in the object that you want to change
    data.nombre = "MARIA";

    // Put this updated object back into the database.
    var requestUpdate = objectStore.put(data);
    requestUpdate.onerror = function (event) {
      // Do something with the error
      console.info("no se puede modificar");
    };
    requestUpdate.onsuccess = function (event) {
      // Success - the data is updated!
      console.info("modificado!");
    };
  };
}
// Consultar datos
function consultar() {
  var objectStore = db.transaction("usuarios").objectStore("usuarios");
  objectStore.openCursor().onsuccess = function (event) {
    var cursor = event.target.result;
    if (cursor) {
      console.log(cursor.value.id);
      console.log(cursor.value.nombre);
      cursor.continue();
    } else {
      console.log("¡No hay más registros disponibles!");
    }
  };
}
