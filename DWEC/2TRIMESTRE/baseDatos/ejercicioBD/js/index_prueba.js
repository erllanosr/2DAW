var user = document.getElementById("usuario");
var clave = document.getElementById("clave");
var db;
let openRequest = indexedDB.open("misUsuarios", 3);
//let deleteRequest = indexedDB.deleteDatabase("idbdwec")

openRequest.onupgradeneeded = function () {
  // se dispara si el cliente no tiene la base de datos
  let db = openRequest.result;
  switch (
    event.oldVersion // versión de db existente
  ) {
    case 0:
      // version 0 significa que el cliente no tiene base de datos
      // ejecutar inicialización
      let db = openRequest.result;
      if (!db.objectStoreNames.contains("usuarios")) {
        // si no hay un almacén de usuarios

        const store = db.createObjectStore("usuarios", {
          keyPath: "id",
          autoIncrement: true,
        });
        store.createIndex("usuario", "usuario", {
          unique: false,
        });
        store.createIndex("clave", "clave", {
          unique: false,
        });
        console.info("creamos usuarios!");
      } else {
        console.info("tenemos usuarios!");
      }
    case 1:
    // el cliente tiene la versión 1
    // actualizar
    //let deleteRequest = indexedDB.deleteDatabase(name)
    //db.deleteObjectStore('usuarios')
  }
};

openRequest.onerror = function () {
  console.error("Error", openRequest.error);
};

openRequest.onsuccess = function () {
  db = openRequest.result;
  // continúa trabajando con la base de datos usando el objeto db
  console.info("Base de datos creada con éxito¡!");
};

function insertar_index() {
  let transaction = db.transaction("usuarios", "readwrite"); // (1)
  console.log("conectado");
  // obtiene un almacén de objetos para operar con él
  let usuarios = transaction.objectStore("usuarios"); // (2)
  console.log("lista creada");
  let usuario = {
    // id: "3",
    nombre: user.value,
    clave: clave.value,
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
// function borrarDatos() {
//   var request = db.transaction("usuarios", "readwrite").objectStore("usuarios").delete("2");
//   request.onsuccess = function (event) {
//     // It's gone!
//     console.info("Eliminado");
//   };
// }
function eliminar_usuario_index(id) {
  // var id_user = id;
  // var request = objectStore.delete(id);
  var request = db.transaction("usuarios", "readwrite").objectStore("usuarios").delete(id);
  request.onsuccess = function (event) {
    // It's gone!
    console.info("Eliminado");
  };
}

// función modificar usuario
function modificar_usuario_index(id) {
  var objectStore = db.transaction("usuarios", "readwrite").objectStore("usuarios");
  var request = objectStore.get(id);
  request.onerror = function (event) {
    // Handle errors!
    console.info("Se ha producido un error!");
  };
  request.onsuccess = function (event) {
    // Get the old value that we want to update
    var data = request.result;

    // update the value(s) in the object that you want to change
    data.nombre = user.value;
    data.clave = clave.value;

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
function consultar_index() {
  var objectStore = db.transaction("usuarios").objectStore("usuarios");
  var table = document.getElementById("tabla_index");
  var verTabla;

  objectStore.openCursor().onsuccess = function (event) {
    var cursor = event.target.result;
    // let id_usuario = cursor.value.id;
    if (cursor) {
      var row = table.insertRow();
      var celda1 = row.insertCell();
      var celda2 = row.insertCell();
      var celda3 = row.insertCell();
      var celda4 = row.insertCell();
      var celda5 = row.insertCell();

      celda1.innerHTML = cursor.value.id;
      celda2.innerHTML = cursor.value.nombre;
      celda3.innerHTML = cursor.value.clave;
      celda4.innerHTML =
        "<button class='boton_modificar' onclick='modificar_usuario_index(" +
        cursor.value.id +
        ")'><i class='bi bi-pencil-square'></i></button>";
      celda5.innerHTML =
        "<button class='boton_eliminar' onclick='eliminar_usuario_index(" +
        cursor.value.id +
        ")'><i class='bi bi-trash'></i></button></button>";
      $("#demo").html(verTabla);

      // $("#index_tabla").html(contenido);
      // nombre_usuario.innerHtml = nombre_usuario;
      console.log(cursor.value.id);
      console.log(cursor.value.nombre);
      console.log(cursor.value.clave);
      cursor.continue();
    }
  };
}
