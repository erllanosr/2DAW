<script>
import Cards from './components/Cards.vue';
const propiedades = [
  { URL: 'https://www.anipedia.net/imagenes/imagen-aguilas-800x375.jpg', titulo: 'Hola', pr: 'qwertyuiopasdfghjklñzxcvbnm' },
  { URL: 'https://t1.ea.ltmcdn.com/es/posts/8/3/8/caracteristicas_de_las_aguilas_24838_600_square.jpg', titulo: 'Qué tal', pr: 'mnbvcxzñlkjhgfdsapoiuytrewq' },
  { URL: 'https://okdiario.com/img/2019/09/30/richard-lee-f12btzeevyk-unsplash111-655x368.jpg', titulo: 'Ovnis', pr: 'asdfghjklllllllñmnbvcxzqwertyuiop' }
]
</script>

<template>
  <div class="row">
    <Cards v-for="propiedad in propiedades" :titulo="propiedad.titulo" :pr="propiedad.pr" :url="propiedad.url"></Cards>
  </div>

</template>
<style>
@import url(./assets/bootstrap.css);
</style>
