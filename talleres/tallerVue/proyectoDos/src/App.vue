<script>
import Ejemplo from './components/Ejemplo.vue';
export default {
  data() {
    return {
      nombres: ['Jackie Chan', 'Bob Marley', 'El Papa'],
    }
  },
  components: {
    Ejemplo
  }
}

</script>

<template>
  <Ejemplo v-for="item in nombres" :nombre=item></Ejemplo>
</template>

<style scoped>

</style>
