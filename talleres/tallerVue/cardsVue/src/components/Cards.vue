<script>
export default {
  props: {
    titulo: {
      type: String,
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">{{ titulo }}</h5>
        <img src="../assets/logo.svg" class="card-img-top">
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
          content.
        </p>
        <a href="#" class="btn btn-success">Leer más</a>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import url('../assets/bootstrap.css');
</style>
