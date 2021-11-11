import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/produtos',
    name: 'Produto',
    component: () => import('../module/produtos/view/Produto.vue')
  },
  {
    path: '/vendas',
    name: 'Venda',
    component: () => import('../module/vendas/view/Venda.vue')
  },
  {
    path: '/compras',
    name: 'Compra',
    component: () => import('../module/compras/view/Compra.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
