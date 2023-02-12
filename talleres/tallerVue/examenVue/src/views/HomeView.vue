<script>
import { RouterView } from 'vue-router'
import HolaView from '../views/HolaView.vue'

// import RouterView from 'vue-router';
export default {
  name: 'App',
  data: () => ({
    // valid: true,
    nombre: '',
    apellido: '',
    nombreRules: [
      nombre => (nombre && nombre.length >= 0) || 'El campo Nombre no debe estar vacío',
    ],
    apellidoRules: [
      apellido => (apellido && apellido.length >= 0) || 'El campo Apellidos no debe estar vacío',
    ],
  }),
  methods: {
    ir_hola: function () {
      if (this.nombre.length > 1 && this.apellido.length > 1) {
        this.$router.push("/hola");
      }
    },
  },
  components: {
    RouterView,
    HolaView,
  },
}
</script>
<template>
  <v-sheet width="300" class="mx-auto">
    <v-form>
      <v-text-field v-model="nombre" label="Nombre" :rules="nombreRules"></v-text-field>
      <p>{{ nombre }}</p>
      <v-text-field v-model="apellido" label="Apellido" :rules="apellidoRules"></v-text-field>
      <v-btn type="submit" block class="mt-2" @click="ir_hola">Enviar</v-btn>
    </v-form>
  </v-sheet>
  <router-view></router-view>
</template>
