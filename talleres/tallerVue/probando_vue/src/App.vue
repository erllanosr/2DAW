<template>
  <!-- CREAR CONTENEDOR -->
  <v-toolbar color="green">
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-toolbar-title>Phantom</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon="mdi-login"></v-btn>
    <v-btn icon="mdi-logout"></v-btn>
    <v-btn icon="mdi-star"></v-btn>
  </v-toolbar>
  <v-card>
    <v-toolbar>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </v-toolbar>
    <v-card-text>
      <v-timeline>
        <v-timeline-item>Hola</v-timeline-item>
        <v-timeline-item color="pink">HOLAAAAAAA</v-timeline-item>
        <v-timeline-item color="orange">wqertyuiop</v-timeline-item>
        <v-timeline-item>asdfgjk</v-timeline-item>
      </v-timeline>
    </v-card-text>
  </v-card>

  <v-carousel hide-delimiters>
    <v-carousel-item v-for="enlace in enlaces" :src="enlace"></v-carousel-item>
  </v-carousel>
  <v-btn class="mt-5" @click="snackbar = true" color="orange-accent-4">Abrir Snack</v-btn>
  <v-snackbar v-model="snackbar" color="lime-accent-2">
    MENSAJE
    <v-btn @click="snackbar = false" color="red-lighten-1">Cerrar</v-btn>
  </v-snackbar>
  <v-container>
    <v-row>
      <v-col lg="12" md="6" sm="6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industry's standard
        dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
        specimen
        book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
        essentially
        unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
        and more
        recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</v-col>
      <v-col lg="12" md="6" sm="6">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard
        dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
        specimen
        book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
        essentially
        unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
        and more
        recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </v-col>
    </v-row>
    <v-row>
      <v-btn icon="mdi-logout" color="green"></v-btn>
      <v-btn color="red">Salir</v-btn>
      <v-btn prepend-icon="mdi-antenna" color="blue" variant="outlined">Activar Wifi</v-btn>
    </v-row>

  </v-container>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    enlaces: ["https://upload.wikimedia.org/wikipedia/commons/5/5b/Grib_skov.jpg", "https://media.traveler.es/photos/62372c7f9999d61fe36db039/16:9/w_2560%2Cc_limit/india.jpg"], snackbar: false
  }),
}
</script>
