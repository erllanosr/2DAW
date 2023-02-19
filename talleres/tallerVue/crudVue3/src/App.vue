<template>
  <v-app>
    <v-main>
      <v-toolbar color="black">
      <v-toolbar-title>Phantom</v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- <v-btn elevation="2" x-large @click="ir_login">Iniciar Sesión</v-btn> -->
      <!-- <v-btn elevation="2" x-large @click="ir_home">Home</v-btn> -->
      <v-app-bar-nav-icon :elevation="2"></v-app-bar-nav-icon>
    </v-toolbar>
    <RouterView></RouterView>
    </v-main>
  </v-app>
</template>

<script>
import LoginView from './views/LoginView.vue';
export default {
  name: 'App',

  data: () => ({
    //
  }),
  methods: {
    ir_login: function () {
      this.$router.push("/login")
    },
    ir_home: function () {
      this.$router.push("/home")
    }
  },
  components: {
    LoginView,
  }
}
</script>
