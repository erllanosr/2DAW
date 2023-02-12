<script setup>
import { ref } from 'vue';
const nota = ref('');
const notas = ref([]);
const listado = ref(false);
const guardarNota = () => {
  if (nota.value == '') {
    window.alert("NO DEBE ESTAR VACÍO");
  } else {
    notas.value.push(nota.value) // Añade la tarea al array
    nota.value = ''; // Vacía el input
  }
}

const listar = () => {
  listado.value = true;
}

// const noListar = () => {
//   listado.value = false;
// }

</script>
<template>
    <v-sheet width="300" class="mx-auto">
    <h1>BUENOS DÍAS { nombre }</h1>
    <h4>Agrega tus notas</h4>
    <v-text-field v-model="nota" label="Tu nota" required></v-text-field>
    <v-btn type="submit" block class="mt-2" @click="guardarNota">Guardar Nota</v-btn>
    <v-btn @click="listar" block class="mt-2" >Mostrar listado</v-btn>
    
    <ul>
      <template v-for="item in notas">
        <li v-if="listado">{{ item }}</li>
      </template>
    </ul>
    </v-sheet>
</template>
