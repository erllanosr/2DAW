<template>
  <v-container>
     <v-btn color="primary" @click="cerrarSesion">Cerrar sesión</v-btn>
    <v-data-table :headers="headers" :items="productos" class="elevation-10">
      <template v-slot:top>
        <v-toolbar flat>
          <v-dialog v-model="dialog" max-width="700px">
            <template v-slot:activator="{ props }">
              <v-btn color="primary" dark class="mb-2" v-bind="props">
                Agregar Producto
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">{{ tituloForm }}</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field v-model="productoEditado.nombre" label="Producto"></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field v-model="productoEditado.descripcion" label="Descripción"></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field v-model="productoEditado.precio" label="Precio"></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field v-model="productoEditado.stock" label="Stock"></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <!-- AGREGAR PRODUCTOS -->
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue-darken-1" variant="text" @click="cerrar">
                  Cancelar
                </v-btn>
                <v-btn color="blue-darken-1" variant="text" @click="save">
                  Guardar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <!-- ELIMINAR PRODUCTO -->
          <v-dialog v-model="dialogBorrar" max-width="500px">
            <v-card>
              <v-card-title class="text-h5">¿Estás seguro de eliminar el producto?</v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue-darken-1" variant="text" @click="cerrarDelete">Cancelar</v-btn>
                <v-btn color="blue-darken-1" variant="text" @click="borrarProductoConfirmar">Sí</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon size="small" class="me-2" @click="editarProducto(item.raw)">
          mdi-pencil
        </v-icon>
        <v-icon size="small" @click="borrarProducto(item.raw)">
          mdi-delete
        </v-icon>
      </template>
    </v-data-table>
  </v-container>
</template>
<script lang>
export default {
  data: () => ({
    dialog: false,
    isLoggedIn: false,
    dialogBorrar: false,
    headers: [
      {
        title: 'Producto',
        align: 'start',
        key: 'nombre',
      },
      { title: 'Descripción', key: 'descripcion' },
      { title: 'Precio', key: 'precio' },
      { title: 'Stock', key: 'stock' },
      { title: '', key: 'actions' },
    ],
    productos: [],
    editedIndex: -1,
    productoEditado: {
      nombre: '',
      descripcion: '',
      precio: 0,
      stock: 0,
    },
    defaultProducto: {
      nombre: '',
      descripcion: '',
      precio: 0,
      stock: 0,
    },
  }),
  computed: {
    tituloForm() {
      return this.editedIndex === -1 ? 'Agregar Producto' : 'Editar Producto'
    },
  },

  watch: {
    dialog(val) {
      val || this.cerrar()
    },
    dialogBorrar(val) {
      val || this.cerrarDelete()
    },
  },

  created() {
    this.initialize()
  },

  methods: {
    initialize() {
      this.productos = [
        {
          nombre: 'Nike Dunk Low',
          descripcion: 159,
          precio: 6.0,
          stock: 24,
        },
        {
          nombre: 'Nike Grey Fog',
          descripcion: 237,
          precio: 9.0,
          stock: 37,
        },
        {
          nombre: 'Camiseta Uniqlo',
          descripcion: 262,
          precio: 16.0,
          stock: 23,
        },
      ]
    },

    editarProducto(item) {
      this.editedIndex = this.productos.indexOf(item)
      this.productoEditado = Object.assign({}, item)
      this.dialog = true
    },

    borrarProducto(item) {
      this.editedIndex = this.productos.indexOf(item)
      this.productoEditado = Object.assign({}, item)
      this.dialogBorrar = true
    },

    borrarProductoConfirmar() {
      this.productos.splice(this.editedIndex, 1)
      this.cerrarDelete()
    },

    cerrar() {
      this.dialog = false
      this.$nextTick(() => {
        this.productoEditado = Object.assign({}, this.defaultProducto)
        this.editedIndex = -1
      })
    },

    cerrarDelete() {
      this.dialogBorrar = false
      this.$nextTick(() => {
        this.productoEditado = Object.assign({}, this.defaultProducto)
        this.editedIndex = -1
      })
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.productos[this.editedIndex], this.productoEditado)
      } else {
        this.productos.push(this.productoEditado)
      }
      this.cerrar()
    },
    cerrarSesion() {
      this.correo = ''
      this.isLoggedIn = false
      this.$router.push('/')
    }
  },
}
</script>