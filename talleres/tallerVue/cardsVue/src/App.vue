<script>
import Cards from './components/Cards.vue';
export default {
  data() {
    return {
      titulos: ['Título del artículo', 'Título del artículo', 'Título del artículo', 'Título del artículo', 'Título del artículo', 'Título del artículo'],
    }
  },
  components: {
    Cards
  }
}

</script>

<template>
  <Cards v-for="item in titulos" :titulo=item></Cards>
</template>

<style scoped>

</style>
