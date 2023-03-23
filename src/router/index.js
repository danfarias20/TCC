import { createRouter, createWebHistory } from 'vue-router'
import AgendaView from '../views/AgendaView.vue'
import CaixaView from '../views/CaixaView.vue'
import ClientesView from '../views/ClientesView.vue'
import PetsView from '../views/PetsView.vue'
import EstoqueView from '../views/EstoqueView.vue'
import ConfigView from '../views/ConfigView.vue'

const routes = [
  {
    path: '/',
    name: 'Agenda',
    component: AgendaView
  },
  {
    path: '/caixa',
    name: 'Caixa',
    component: CaixaView
  },
  {
    path: '/clientes',
    name: 'Clientes',
    component: ClientesView
  },
  {
    path: '/pets',
    name: 'Pets',
    component: PetsView
  },
  {
    path: '/estoque',
    name: 'Estoque',
    component: EstoqueView
  },
  {
    path: '/config',
    name: 'Config',
    component: ConfigView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
