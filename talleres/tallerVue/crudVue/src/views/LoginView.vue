<template>
  <div>
    <v-sheet width="300" class="mx-auto">
      <h1>Iniciar Sesión</h1>
      <v-form ref="form">
        <v-text-field v-model="correo"  label="Correo" required></v-text-field>
        <v-text-field v-model="clave" label="Contraseña" required></v-text-field>
        <div class="d-flex flex-column">
          <v-btn color="success" class="mt-4" block @click="validate, ir_home()">
            Iniciar Sesión
          </v-btn>
        </div>
      </v-form>
    </v-sheet>

  </div>
  <div>
    <ul v-if="posts && posts.length">
      <li v-for="post of posts">
        <p><strong>{{post.title}}</strong></p>
        <p>{{post.body}}</p>
      </li>
    </ul>
  
    <ul v-if="errors && errors.length">
      <li v-for="error of errors">
        {{error.message}}
      </li>
    </ul>
  </div>
</template>
<script>

import axios from 'axios';
export default {
  data() {
    return {
      correo: '',
      clave: '',
      posts: [],
      errors: []
    };
  },
  async created() {
    try {
      const response = await axios.get(`http://jsonplaceholder.typicode.com/posts`)
      this.posts = response.data
    } catch (e) {
      this.errors.push(e)
    }
  },

  methods: {
    ir_home : function () {
      this.$router.push("/home")
    },
    
    async validate() {
      const { valid } = await this.$refs.form.validate()

      if (valid) alert('Form is valid')
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    },
  },
}
</script>

<style>

</style>
