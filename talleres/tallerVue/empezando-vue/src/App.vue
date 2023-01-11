<script setup  lang="ts">
import { ref, computed } from 'vue';
const saludo = "Bienvenido Broski";
const hola = ['DAW', 'DAM'];
const color = 'color: blue';
const imf = ['Antonio', 'Maik', 'Charly'];
const active = false;
const alumnos = [
  {
    nombre: "Juan",
    edad: 21,
  },
  {
    nombre: "Piero",
    edad: 25,
  }
];
const alumnobis = {
  nombre: "Erick",
  edad: 23,
};

const contador = ref(0);
const aumentar = () => {
  contador.value++;
};
const disminuir = () => {
  contador.value--;
};
const reiniciar = () => {
  contador.value = 0;
};
const clase = computed(() => {
  if (contador.value == 0) {
    return 'cero';
  }
});
</script>

<template>
  <h1>{{ saludo }}</h1>
  <h2>{{ hola }}</h2>
  <h3 :style=color>{{ hola }}</h3>
  <li v-for="(nombre, index) in imf" :key="index">{{ index }} - {{ nombre }}</li>
  <p v-if="active">Hola</p>
  <p v-else-if="active">HOLA 1</p>
  <p v-else>Hola 2</p>
  <ul>
    <li v-for="alumno in alumnos">{{ alumno.nombre }}-{{ alumno.edad }}</li>
  </ul>
  <ul>
    <li v-for="(item, index) in alumnobis">{{ index }}</li>
  </ul>
  <ul>
    <template v-for="alumno in alumnos">
      <li v-if="alumno.nombre === 'Juan'">{{ alumno.nombre }}</li>
    </template>
  </ul>
  <button @click="aumentar">Agregar</button>
  <button @click="disminuir">Quitar</button>
  <button @click="reiniciar">Reiniciar</button>
  <div :class="clase">{{ contador }}</div>
</template>
<style scoped>
.cero {
  color: lightskyblue;
}
</style>
