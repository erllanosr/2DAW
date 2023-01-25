<script>
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
</style>
