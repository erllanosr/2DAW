<script setup>
const propiedades = [
  { URL: 'https://www.anipedia.net/imagenes/imagen-aguilas-800x375.jpg', titulo: 'Hola', pr: 'qwertyuiopasdfghjklñzxcvbnm' },
  { URL: 'https://t1.ea.ltmcdn.com/es/posts/8/3/8/caracteristicas_de_las_aguilas_24838_600_square.jpg', titulo: 'Qué tal', pr: 'mnbvcxzñlkjhgfdsapoiuytrewq' },
  { URL: 'https://okdiario.com/img/2019/09/30/richard-lee-f12btzeevyk-unsplash111-655x368.jpg', titulo: 'Ovnis', pr: 'asdfghjklllllllñmnbvcxzqwertyuiop' }
]

</script>
<template>
  <div class="row">
    <div class="col-lg-4" v-for="propiedad in propiedades">
      <div class="card">
        <img class="card-img-top w-30" :src="propiedad.URL" />
        <div class="card-body">
          <h2 class="card-title">
            {{ propiedad.titulo }}
          </h2>
          <p class="card-text">{{ propiedad.pr }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import url(./assets/bootstrap.css);
</style>
