<template>
  <div>
    <v-app>
      <v-main>
        <!--<h2 class="text-center">CRUD usando APIREST con Node JS</h2>-->
        <!-- Botón CREAR -->
        <v-card class="mx-auto mt-5" color="transparent" max-width="1280" elevation="0">
          <v-btn class="mx-2" fab dark color="#E040FB" @click="formNuevo()"><v-icon dark>mdi-plus</v-icon></v-btn>
          <!-- Tabla y formulario -->
          <v-simple-table class="mt-5">
            <template v-slot:default>
              <thead>
                <tr class="purple darken-2">
                  <th class="white--text">ID</th>
                  <th class="white--text">DESCRIPCIÓN</th>
                  <th class="white--text">PRECIO</th>
                  <th class="white--text">STOCK</th>
                  <th class="white--text text-center">ACCIONES</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="articulo in articulos" :key="articulo.id">
                  <td>{{ articulo.id }}</td>
                  <td>{{ articulo.descripcion }}</td>
                  <td>{{ articulo.precio }}</td>
                  <td>{{ articulo.stock }}</td>
                  <td>
                    <v-btn class="pink" dark small fab
                      @click="formEditar(articulo.id, articulo.descripcion, articulo.precio, articulo.stock)"><v-icon>mdi-pencil</v-icon></v-btn>
                    <v-btn class="error" fab dark small @click="borrar(articulo.id)"><v-icon>mdi-delete</v-icon></v-btn>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card>
        <!-- Componente de Diálogo para CREAR y EDITAR -->
        <v-dialog v-model="dialog" max-width="500">
          <v-card>
            <v-card-title class="purple darken-4 white--text">Artículo</v-card-title>
            <v-card-text>
              <v-form>
                <v-container>
                  <v-row>
                    <input v-model="articulo.id" hidden>
                    <v-col cols="12" md="4">
                      <v-text-field v-model="articulo.descripcion" label="Descripción" solo required>{{
                        articulo.descripcion
                      }}</v-text-field>
                    </v-col>
                    <v-col cols="12" md="4">
                      <v-text-field v-model="articulo.precio" label="Precio" type="number" prefix="$" solo
                        required></v-text-field>
                    </v-col>
                    <v-col cols="12" md="4">
                      <v-text-field v-model="articulo.stock" label="Stock" type="number" solo required></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn @click="dialog = false" color="blue-grey" dark>Cancelar</v-btn>
              <v-btn @click="guardar()" type="submit" color="purple accent-3" dark>Guardar</v-btn>
            </v-card-actions>

          </v-card>
        </v-dialog>
      </v-main>
    </v-app>
  </div>
</template>
<script>
export default {

}
</script>