<script setup>
import { ref } from 'vue';
const tarea = ref('');
const tareas = ref([]);
const listado = ref(false);
const guardarTarea = () => {
  if (tarea.value == '') {
    window.alert("NO DEBE ESTAR VACÍO");
  } else {
    tareas.value.push(tarea.value) // Añade la tarea al array
    tarea.value = ''; // Vacía el input
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
  <h1>To-Do List</h1>
  <input type="text" v-model='tarea' id="input_name" class="form-control" placeholder="Agregar nueva tarea" />
  <br />
  <button class="btn btn-primary" @click="guardarTarea">Agregar</button>
  <button class="btn btn-warning" @click="listar">Mostrar listado</button>
  <button class="btn btn-danger" @click="noListar">Ocultar Listado</button>
  <div>
    <ul>
      <template v-for="item in tareas">
        <li v-if="listado">{{ item }}</li>
      </template>
    </ul>
  </div>
</template>

<style scoped>
@import url(../assets/bootstrap.css);
</style>
