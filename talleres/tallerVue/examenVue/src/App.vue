<template>
  <!-- <v-app>
    <v-main>
      <RouterView></RouterView>
    </v-main>
  </v-app> -->
  <RouterView></RouterView>
</template>
<script>
// import { RouterView } from 'vue-router'
import HolaView from './views/HolaView.vue'

// import RouterView from 'vue-router';
export default {
  name: 'App',

  data: () => ({
    components: {
      HolaView,
  }
  }),
}
</script>
