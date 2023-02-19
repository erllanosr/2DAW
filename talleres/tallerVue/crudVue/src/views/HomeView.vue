<template>
  <v-container>
    <h1>Agregar nuevo producto</h1>
    <v-dialog v-model="dialog" overlay-color="black" overlay-opacity="1">
      <template v-slot:activator="{ props }">
        <v-btn color="primary" v-bind="props" prepend-icon="mdi-plus-thick">
          Agregar Producto
        </v-btn>
      </template>
      <v-card class="mx-auto" width="800" outlined>
        <v-form>
          <v-container cols="12">
            <v-row>
              <v-col cols="12">
                <v-file-input small-chips truncate-length="1" label="Imagen"></v-file-input>
                <v-text-field v-model="producto" label="Producto" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="descripcion" label="Descripción" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="precio" label="Precio" required></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
        <v-btn color="black" block @click="dialog = false">Cancelar</v-btn>
        <v-btn color="primary" block @click="guardar_producto()">Agregar Producto</v-btn>

      </v-card>
    </v-dialog>
    <!-- EMPIEZA LA TABLA -->
    <v-table>
      <tr>
        <th class="text-left">
          ID
        </th>
        <th class="text-left">
          Imagen
        </th>
        <th class="text-left">
          Nombre
        </th>
        <th class="text-left">
          Descripción
        </th>
        <th class="text-left">
          Precio
        </th>
      </tr>
      <tr v-for="item in productos">
        <td>{{ item.id }}</td>
        <td>Imagen</td>
        <td>{{ item.producto }}</td>
        <td>{{ item.descripcion }}</td>
        <td>{{ item.precio }}</td>
        <td>
          <v-btn icon="mdi-pencil" variant="text"></v-btn>
        </td>
        <td>
          <v-btn icon="mdi-trash-can" variant="text"></v-btn>
        </td>
      </tr>
    </v-table>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      producto: '',
      descripcion: '',
      precio: '',
      dialog: false,
      productos: [
        {
          id: '',
          producto: 'NOMBRE',
          descripcion: 'DESCRIPCIÓN',
          precio: 'PRECIO',
        },
      ],
      methods: {
        guardar_producto : function() {
          if (this.producto != '' && this.descripcion != '' && this.precio != '') {
            this.productos.push(this.producto + this.descripcion + this.precio)
            this.producto = null
            this.descripcion= null
            this.precio = null

          }
        }
      }
    }
  },
}
</script>

<style>

</style>
