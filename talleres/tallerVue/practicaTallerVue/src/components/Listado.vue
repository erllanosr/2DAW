<script setup>
import { ref } from 'vue';
const nombre = ref('');
const nombres = ref([]);
const listado = ref(false);
const guardarNombre = () => {
  if (nombre.value == '') {
    window.alert("Te falta una tarea por añadir");
  } else {
    nombres.value.push(nombre.value) // Añade el nombre al array
    nombre.value = ''; // Vacía el input
  }
}

const listar = () => {
  listado.value = true;
}

const noListar = () => {
  listado.value = false;
}

</script>
<template>
  <h1>Ingresa tu nombre </h1>
  <input type="text" v-model='nombre' id="input_name" class="form-control" placeholder="nombre" />
  <br />
  <button class="btn btn-primary" @click="guardarNombre()">Agregar</button>
  <button class="btn btn-warning" @click="listar">Mostrar listado</button>
  <button class="btn btn-danger" @click="noListar">Ocultar Listado</button>

  <div>
    <ul>
      <template v-for="item in nombres">
        <li v-if="listado">{{ item }}</li>
      </template>
    </ul>
  </div>
</template>
<style scoped>
@import url(../assets/bootstrap.css);
</style>
