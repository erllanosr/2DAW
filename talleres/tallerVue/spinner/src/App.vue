<!-- <script>
export default{
  data() {
    return {
      x:0,
      y:0
    }
  },
  methods: {
    ubicacion: function (event) {
      this.x = event.clientX;
      this.y = event.clientY;
    }
  },
  created() {
    window.addEventListener('mousemove', this.ubicacion);
  }
}

</script>

<template>
  <div :style="{'left': x+'px', 'top':y+'px', 'position': 'absolute'}" class="spinner-border spinner-border-sm" />
  
</template>

<style>
@import url(./assets/bootstrap.css);
</style> -->
<script>
// export default {
//   data() {
//     return {
//      data: ''
//     }
//   },
//   created() {
//     this.data="Hola"
//   },
// }
export default {
  data() {
    return {
      mensaje: '',
      nombre: ''
    }
  },
  watch : {
    nombre: function (value, valuea) {
      if (value=='Erick' || value=='erick') {
        this.mensaje = 'Bienvenido'
      } else {
        this.mensaje = ''
      }
      console.log(`'${valuea}'`);
    }
  }
}
</script>

<template>
  <div class="container">
    <h1>INPUT</h1>
    <input type="text" v-model="nombre" class="form-control">
    <p>{{ mensaje }}</p>
  </div>
</template>

<style>
@import url(./assets/bootstrap.css);
</style>
