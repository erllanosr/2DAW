/**
 * TODO: COSAS A VALIDAR
 * ?CLAVE:
 * - Que sean iguales
 * - Que tenga un número, una mayúscula y un símbolo.
 * ?NOMBRE:
 * - Que solo sean letras.
 * - Que tenga 2 letras mínimo de nombre y 2 mínimo de apellido.
 * ?USERNAME:
 * - Que tenga mínimo 6 y máximo 14 de longitud.
 * - Que tenga letras y números.
 * ?EMPRESA:
 * - Formato: empresa/cargobg
 * - Mínimo 2 letras de empresa / Mínimo 2 letras de Cargo
 * ?COLOR:
 * - Rango del 0- 255
 *
 * *HECHAS:
 * ?CLAVE:
 * - Que sean iguales.
 * - Mínimo 8 y máximo 16
 * - Que tenga Mayúscula, Minúscula y Símbolos.
 * ?NOMBRE:
 * - Que solo sean letras.
 * - Que hayan 2 y 2
 * ?USERNAME:
 * - Entre 6 y 14 caracteres.
 * - Solo letras y números.
 * ?<EMPRESA>
 * - Formato 2/2
 * - Mínimo 2 letras de empresa / Mínimo 2 letras de Cargo
 * ?COLOR
 * - Rango 0-255
 *
 * !POR HACER
 * ?CLAVE:
 * ?NOMBRE:
 * ?USERNAME:
 * ?EMPRESA:
 * ?COLOR:
 */
/**
 * !INICIO VALIDACIONES CONTRASEÑA
 */
// VALIDACIONES DE CONTRASEÑA
// Que sean iguales
function validarIgualdad(claveUno, claveDos) {
  if (claveUno === claveDos) {
    console.info("SON IGUALES");
  } else {
    console.info("SON DIFERENTES");
  }
}
// Que tenga caracteres y que la longitud sea mayor a 8 y menor a 16.
function validarClaveVacia(claveUno, claveDos) {
  if (claveUno === "" || claveDos === "") {
    // Que clave 1 y 2 no estén vacíos.
    console.info("V.CONTRASEÑA: Todos los campos son obligatorios, por favor, rellénalos.");
  } else if ((claveUno.length < 8 || claveUno.length > 16) && (claveDos.length < 8 || claveDos.length > 16)) {
    // Mínimo 8 y 16
    console.info("V.CONTRASEÑA: La contraseña debe tener como mínimo 8 caracteres y máximo 16.");
  }
}

// Que tenga Mayúscula, Símbolo y Número
function validarClaveCaracteres(claveUno, claveDos) {
  var regexCaracteres = "^[a-zA-ZñÑáéíóúÁÉÍÓ0-9@#~]{8,16}$";
  if (claveUno.match(regexCaracteres) != null && claveDos.match(regexCaracteres) != null) {
    console.info("V. CONTRASEÑA, BIEN: CONTIENE MAYÚSCULAS, NÚMEROS Y CARACTERES.");
  } else {
    console.info("V. CONTRASEÑA, MAL: NO CONTIENE MAYÚSCULAS O NÚMEROS O CARACTERES.");
  }
}

/**
 * !INICIO VALIDACIONES NOMBRE
 */
// VALIDAR LONGITUD MÍNIMA
function validarNombreLong(nombre) {
  if (nombre.length >= 2) {
    console.log("V. NOMBRE: LONGITUD MENOR A 2.");
  } else {
    console.log("V. NOMBRE: LONGITUD CORRECTA");
  }
}

function nombreLongLetras(nombre) {
  // \s <-- espacio en blanco.
  var regexDosDos = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ]{2,}\s[a-zA-ZñÑáéíóúÁÉÍÓÚ]{2,}$/gm;
  if (nombre.length>=2) {
    console.log("LONGITUD CORRECTA NOMBRE");
    if (nombre.match(regexDosDos)!= null) {
      console.log("V. NOMBRE, BIEN: CONTIENE SOLO LETRAS.");
    } else {
      console.log("V. NOMBRE, MAL:  SÓLO DEBE DE HABER LETRAS.");
    }
  } else {
    console.log("V. NOMBRE: MAL, LA LONGITUD DEL NOMBRE DEBE SER MAYOR A 2.");
  }
}


// QUE HAYAN SOLO LETRAS.
// error solo letras¿?
function validarNombreLetras(nombre) {
  //var ExpRegSoloLetras = "^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$";
  // Sí funciona Regex101 pero sin comillas en VSCODE, usar slash.
  var regexDosDos = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ]{2,}\s[a-zA-ZñÑáéíóúÁÉÍÓÚ]{2,}$/gm;
  if (nombre.match(regexDosDos) != null) {
    console.log("V. NOMBRE, BIEN: VÁLIDO Contiene solo letras.");
  } else {
    console.log("V. NOMBRE, MAL: SÓLO DEBE DE HABER LETRAS");
  }

  /*if (nombre.length < 2) {
    console.log("LONGITUD MENOR A 2");
  } else if (nombre.match(ExpRegSoloLetras) != null && nombre.match(regex2y2) != null) {
    console.log("VALIDAR NOMBRE BIEN: VÁLIDO Contiene solo letras.");
  } else {
    console.log("VALIDAR NOMBRE ERROR: SÓLO DEBE DE HABER LETRAS");
  }*/

  // prueba 2
  /*function validarNombreLetras2(nombre) {
    var regexSoloLetras = "^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$";
    var regex2y2 = "^[a-zA-ZñÑáéíóúÁÉÍÓÚ]{2}+[a-zA-ZñÑáéíóúÁÉÍÓÚ]{2}+$";

    if (nombre.match(regexSoloLetras) != null && nombre.match(regex2y2) != null) {
      console.log("NOMBRE VÁLIDO.");
    } else {
      console.log("VALIDAR NOMBRE: ERROR.");
    }
  }*/
}


// 2 letras y 2 letras
/*function validarDosDos(nombre) {
  var regex2y2 = "^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]{2} +[a-zA-ZñÑáéíóúÁÉÍÓÚ ]{2}$";
  //var nombreStr = regex2y2.test(nombreStr);
  var resultado = regex2y2.match(nombre.value);
  if (resultado) {
    console.log("TODO BIEN");
  } else {
    console.log("TODO MAL");
  }
}*/

/**
 * !INICIO VALIDACIONES USUARIO
 */
// Que tenga mínimo 6 y 14 caracteres.
// Solo letras y números
function validarUsuario(username) {
  var regexUsuario = "^[a-zA-ZñÑáéíóúÁÉÍÓ0-9]{6,14}$";
  if (username.length >= 6 || username.length <= 14) {
    if (username.match(regexUsuario) != null) {
      console.log("V. USUARIO, BIEN: Usuario correcto");
    } else {
      console.log(
        "V. USUARIO, MAL: El usuario debe tener entre 6 y 14 caracteres y sólo puede incluir letras y números."
      );
    }
  }
}
/**
 * !INICIO VALIDACIONES EMPRESA / CARGO
 */
// formato empresa/cargo
// Mínimo 2 letras de empresa y 2 de cargo aa/bb
// /^[a-zA-ZñÑáéíóúÁÉÍÓÚ]{1,}\W\S[a-zA-ZñÑáéíóúÁÉÍÓÚ]{1,}$/gm
function validarEmpCar(empCar) {
  var regexEmpresa = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ]{1,}\W\S[a-zA-ZñÑáéíóúÁÉÍÓÚ]{1,}$/gm;
  if (empCar.match(regexEmpresa) != null) {
    console.log("V. EMP/CAR, BIEN: EMP/CARGO BIEN");
  } else {
    console.log("V. EMP/CAR, MAL: EMP/CARGO MAL");
  }
}

/**
 * !INICIO VALIDACIONES COLOR
 */
// Rango 0-255
function validarColor(colorUno, colorDos, colorTres) {
  if (colorUno >= 0 && colorUno <= 255 && colorDos >= 0 && colorDos <= 255 && colorTres >= 0 && colorTres <= 255) {
    console.info("V. COLOR, BIEN: DENTRO DEL RANGO, ENTRE 0-255");
  } else {
    console.info("V. COLOR, MAL: FUERA DEL RANGO, MENOR A 0 y/o MAYOR A 255.");
  }
}

// PRUEBAS
//^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]{2}\/+[a-zA-ZñÑáéíóúÁÉÍÓÚ ]{2}$
//USUARIO
// ^[a-zA-ZñÑáéíóúÁÉÍÓ0-9]{6,14}
//clave
// ^[a-zA-ZñÑáéíóúÁÉÍÓ0-9!"·$%&/()=?]{8,16}
