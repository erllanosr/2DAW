import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Crear from '../components/Crear.vue'
import Editar from '../components/Editar.vue'
import Listar from '../components/Listar.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/crear',
      name: 'crear',
      component: Crear
    },
    {
      path: '/editar',
      name: 'editar',
      component: Editar
    },
    {
      path: '/listar',
      name: 'listar',
      component: Listar
    },
    
  ]
})

export default router
