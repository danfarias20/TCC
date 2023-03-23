import { createRouter, createWebHistory } from 'vue-router'
import AgendaView from '../views/AgendaView.vue'
import ClientesView from '../views/ClientesView.vue'

const routes = [
  {
    path: '/',
    name: 'Agenda',
    component: AgendaView
  },
  {
    path: '/clientes',
    name: 'Clientes',
    component: ClientesView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
