<template>
  <v-app>
    <v-main>
      <router-link to="/"></router-link>
      <router-link to="/editar">Editar</router-link>
      <router-link to="/crear">Crear</router-link>
      <router-link to="/listar">Listar</router-link>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    //
  }),
}
</script>
