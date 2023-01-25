<script>
export default {
  data() {
    return {
      nombre: '',
      x: 0,
      y: 0
    }
  },
  computed: {
    contador: function () {
      return this.nombre.length;
    }
  },
  methods: {
    ubicacion: function (event) {
      this.x = event.clientX;
      this.y = event.clientY;
    }
  }
}
</script>
<template>
  <input type="text" v-model="nombre" class="form-control">
  <p>El número de caracteres es {{ contador }}</p>

  <div @mousemove="ubicacion" style="border: 1px solid lightpink; width: 300px; height: 300px;">
    <p>x: {{ x }}</p>
    <p>y: {{ y }}</p>
  </div>
  <div class="spinner-grow text-warning" role="status">
  </div>
</template>
<style>
@import url(./assets/bootstrap.css);
</style>
