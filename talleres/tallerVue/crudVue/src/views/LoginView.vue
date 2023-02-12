<template>
  <div>
    <v-sheet width="300" class="mx-auto">
      <h1>Iniciar Sesión</h1>
      <v-form ref="form">
        <v-text-field v-model="name" :rules="nameRules" label="Correo" required></v-text-field>
        <v-text-field v-model="password" :rules="nameRules" label="Contraseña" required></v-text-field>

        <div class="d-flex flex-column">
          <v-btn color="success" class="mt-4" block @click="validate, ir_home()">
            Iniciar Sesión
          </v-btn>
          <v-btn color="error" class="mt-4" block @click="reset">
            Resetear Formulario
          </v-btn>
        </div>
      </v-form>
    </v-sheet>

  </div>
</template>
<script>
export default {
  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Campos obligatorios',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    select: null,
  }),

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
