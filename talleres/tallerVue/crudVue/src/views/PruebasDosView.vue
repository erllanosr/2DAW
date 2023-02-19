<template>
  <v-container>
    <v-dialog v-model="dialog" width="auto">
      <template v-slot:activator="{ props }">
        <v-btn color="primary" v-bind="props" @click="agregarUsuario">
          Agregar Producto
        </v-btn>
      </template>
      <v-card class="mx-auto" width="800" outlined>
        <v-form v-if="productoSeleccionado !== null">
          <h3>{{ productoSeleccionado.id === null ? 'Agregar' : 'Editar' }} Producto</h3>
          <div>
            <v-text-field v-model="productoSeleccionado.producto" label="Producto" type="text" id="producto"></v-text-field>
          </div>
          <div>
            <v-text-field v-model="productoSeleccionado.descripcion" label="Descripción" type="text"
              id="descripcion"></v-text-field>
          </div>
          <div>
            <v-text-field v-model="productoSeleccionado.precio" label="Precio" type="number" id="precio"></v-text-field>
          </div>
        </v-form>
        <v-card-actions>
          <!-- <v-btn color="primary" block @click="dialog = false">Cerrar</v-btn> -->
          <v-btn @click="dialog = false" color="primary">Cancelar</v-btn>
          <v-btn @click="guardarUsuario" color="secondary">Guardar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-table>
      <thead>
        <tr>
          <th class="text-left">
            ID
          </th>
          <th class="text-left">
            Producto
          </th>
          <th class="text-left">
            Descripción
          </th>
          <th class="text-left">
            Precio
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="producto in productos">
          <td>{{ producto.id }}</td>
          <td>{{ producto.producto }}</td>
          <td>{{ producto.descripcion }}</td>
          <td>{{ producto.precio }}</td>
          <td>
            <v-btn icon="mdi-pencil" variant="text" @click="editarProducto(producto.id)"></v-btn>
            <v-btn icon="mdi-trash-can" variant="text" @click="borrarProducto(producto.id)"></v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
    <v-form v-if="productoSeleccionado !== null">
          <h3>{{ productoSeleccionado.id === null ? 'Agregar' : 'Editar' }} Producto</h3>
          <div>
            <v-text-field v-model="productoSeleccionado.producto" label="Producto" type="text" id="producto"></v-text-field>
          </div>
          <div>
            <v-text-field v-model="productoSeleccionado.descripcion" label="Descripción" type="text"
              id="descripcion"></v-text-field>
          </div>
          <div>
            <v-text-field v-model="productoSeleccionado.precio" label="Precio" type="number" id="precio"></v-text-field>
          </div>
        </v-form>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
      productos: [
        { id: 1, producto: 'Zapatillas', descripcion: 'Zapatillas Nike', precio: 12 },
        { id: 2, producto: 'Botas', descripcion: 'Botas Dr. Martens', precio: 12 },
        { id: 3, producto: 'Trineo', descripcion: 'Trineo Decathlon', precio: 12 }
      ],
      productoSeleccionado: null
    };
  },
  methods: {
    agregarUsuario() {
      this.productoSeleccionado = { id: null, producto: '', descripcion: '', precio: '' };
    },
    editarProducto(id) {
      this.productoSeleccionado = this.productos.find(user => user.id === id);
    },
    borrarProducto(id) {
      this.productos = this.productos.filter(user => user.id !== id);
    },
    guardarUsuario() {
      if (this.productoSeleccionado.id === null) {
        this.productoSeleccionado.id = this.productos.length + 1;
        this.productos.push(this.productoSeleccionado);
      }
      this.productoSeleccionado = null;
    },
    cancelar() {
      this.productoSeleccionado = null;
    }
  }
};
</script>
