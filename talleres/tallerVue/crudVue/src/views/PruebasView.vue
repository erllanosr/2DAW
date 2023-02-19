<template>
  <div>
    <v-container>
      <h1>CRUD Productos</h1>
      <v-data-table :headers="headers" :items="productos" class="elevation-10">
         <template v-slot:top>
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
                  <v-btn color="blue-darken-1" variant="text" @click="close">
                    Cancelar
                  </v-btn>
                  <v-btn color="blue-darken-1" variant="text" @click="save">
                    Guardar
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
         </template>
       
      </v-data-table>
      <br>
      <v-text-field label="Producto" v-model="nombre_producto"></v-text-field>
      <v-text-field label="Descripcion" v-model="descripcion"></v-text-field>
      <v-text-field label="Precio" v-model="precio"></v-text-field>
      <v-btn @click="guardar">Guardar</v-btn>
    </v-container>
    <v-container>
      <v-table>
        <tr>
          <th class="text-left">
            ID
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
          <td>{{ item.nombre_producto }}</td>
          <td>{{ item.descripcion }}</td>
          <td>{{ item.precio }}</td>
          <td></td>
          <td>
            <v-btn icon="mdi-pencil" variant="text"></v-btn>
          </td>
          <td>
            <v-btn icon="mdi-trash-can" variant="text" @click=eliminarProducto(index)></v-btn>
          </td>
        </tr>
      </v-table>
      <hr>
      <hr>
      <hr>
      <hr>
      <!-- TAREAS -->

      <h1>Lista de Tareas</h1>
      <input type="text" v-model="nuevoProducto" placeholder="Nuevo Producto">
      <button @click="agregarProducto">Agregar</button>
      <li v-for="(task, index) in productos">
        <template v-if="editIndex === index">
          <input type="text" v-model="task.text">
          <button @click="actualizarProducto(index)">Guardar</button>
          <button @click="cancelarEdicion">Cancelar</button>
        </template>
        <template v-else>
          {{ task.text }}
          <button @click="editarProducto(index)">Editar</button>
          <button @click="eliminarProducto(index)">Eliminar</button>
        </template>
      </li>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      headers: [
        {
          title: 'Producto',
          align: 'start',
          key: 'nombre',
        },
        { title: 'Descripción', 
          key: 'descripcion' },
        { title: 'Precio', key: 'precio' },
        { title: 'Stock', key: 'stock' },
        { title: '', key: 'actions' },
      ],
      nombre_producto: '',
      descripcion: '',
      precio: '',
      productos:[],
      productos: [
        { id: 1, text: "Tarea 1" },
        { id: 2, text: "Tarea 2" },
        { id: 3, text: "Tarea 3" }
      ],
      nuevoProducto: "",
      editIndex: -1
    }
  },
  methods: {
    guardar() {
      if (this.nombre_producto != '' && this.descripcion != '' && this.precio != '') {
        this.productos.push(this.id + this.nombre_producto + this.descripcion + this.precio)
        this.nombre_producto = null
        this.descripcion = null
        this.precio = null
        id = this.productos.length +1;
      } else {
        window.alert("TE FALTA ALGO");
      }
    },
    agregarProducto() {
      if (this.nuevoProducto) {
        this.productos.push({
          id: this.productos.length + 1,
          text: this.nuevoProducto
        });
        this.nuevoProducto = "";
      }
    },
    eliminarProducto(index) {
      this.productos.splice(index, 1);
    },
    editarProducto(index) {
      this.editIndex = index;
    },
    actualizarProducto() {
      this.editIndex = -1;
    },
    cancelarEdicion() {
      this.editIndex = -1;
    }
  },
}
</script>