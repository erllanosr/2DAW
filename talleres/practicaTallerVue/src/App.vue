<script setup>
var nombre = document.getElementById("input_name");
var nombres = ["Erick"];

const agregarNombre = () => {
  if (nombre.value == "") {
    alert("El nombre no puede estar vacío");
  } else {
    nombres.value.push();
  }
}

var listarNombres = () => {
  console.log(nombres);
}


</script>
<template>
  <h1>Ingresa tu nombre </h1>
  <form action="">
    <input type="text" id="input_name" class="form-control" placeholder="nombre">
    <button class="btn btn-primary" @click="agregarNombre">Agregar</button>
  </form>
  <button class="btn btn-warning" @click="listarNombres">Mostrar listado</button>
</template>
<style scoped>
</style>
