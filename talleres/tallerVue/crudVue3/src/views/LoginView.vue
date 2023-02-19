<template>
  <v-sheet width="300" class="mx-auto">
    <h1>Iniciar Sesión</h1>
    <v-form ref="form">
      <v-text-field v-model="correo" label="Correo" required></v-text-field>
      <v-text-field v-model="clave" label="Contraseña" required></v-text-field>
      <div class="d-flex flex-column">
        <v-btn color="success" class="mt-4" @click="iniciarSesion()">
          Iniciar Sesión
        </v-btn>
      </div>
    </v-form>
    <p v-if="error" style="color: red;">{{ error }}</p>
  </v-sheet>
</template>

<script>
export default {
  data() {
    return {
      correo: '',
      clave: '',
      error: ''
    }
  },
  methods: {
    ir_home: function () {
      this.$router.push("/home")
    },
    iniciarSesion() {
      // Array de objetos que contienen datos de usuario permitidos
      const usuarios = [
        { correo: 'usuario1', clave: 'contraseña1' },
        { correo: 'usuario2', clave: 'contraseña2' },
        { correo: 'usuario3', clave: 'contraseña3' }
      ]

      const usuario = usuarios.find(u => u.correo === this.correo && u.clave === this.clave)

      if (usuario) {
        this.ir_home()
      } else {
        this.error = 'El nombre o la contraseña son incorrectos.'
      }
    },
    
  }
}
</script>