<template>
  <div>
    <v-container>
      <h1>CRUD Productos</h1>
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
            <v-btn icon="mdi-trash-can" variant="text" @click=removeTask(index)></v-btn>
          </td>
        </tr>
      </v-table>
      <hr>
      <hr>
      <hr>
      <hr>
      <!-- TAREAS -->
      <h1>Lista de Tareas</h1>
      <input type="text" v-model="newTask" placeholder="Nueva tarea">
      <button @click="addTask">Agregar</button>
      <li v-for="(task, index) in tasks">
        <template v-if="editIndex === index">
          <input type="text" v-model="task.text">
          <button @click="updateTask(index)">Guardar</button>
          <button @click="cancelEdit">Cancelar</button>
        </template>
        <template v-else>
          {{ task.text }}
          <button @click="editTask(index)">Editar</button>
          <button @click="removeTask(index)">Eliminar</button>
        </template>
      </li>


    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      nombre_producto: '',
      descripcion: '',
      precio: '',
      productos:[],
      tasks: [
        { id: 1, text: "Tarea 1" },
        { id: 2, text: "Tarea 2" },
        { id: 3, text: "Tarea 3" }
      ],
      newTask: "",
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
    addTask() {
      if (this.newTask) {
        this.tasks.push({
          id: this.tasks.length + 1,
          text: this.newTask
        });
        this.newTask = "";
      }
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
    editTask(index) {
      this.editIndex = index;
    },
    updateTask() {
      this.editIndex = -1;
    },
    cancelEdit() {
      this.editIndex = -1;
    }
  },
}
</script>