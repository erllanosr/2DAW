<script>
import { ref } from 'vue';
export default {
  props: {
    nombre: {
      type: String,
    }
  }

  // data() {
  //   return {
  //     nombre: ref('Erick'),
  //   }
  // },
  // methods: {
  //   comprobar() {
  //     if (this.nombre == "") {
  //       window.alert("No hay nada");
  //     }
  //   }
  // }
}
// const nombre = ref('');
// const comprobar = () => {
//   if (nombre.value == "") {
//     window.alert("El nombre no puede estar vacío");
//   }
// };
</script>
<template>
  <div>
    <h1 class="text-warning">Bienvenido, {{ nombre }}</h1>
    <!-- <input v-model="nombre" type="text" class="form-control" placeholder="Introduce tu nombre..." />
    <button class="btn btn-warning" @click="comprobar">Guardar</button> -->
  </div>
</template>
<style>
@import url('../assets/bootstrap.css');
</style>