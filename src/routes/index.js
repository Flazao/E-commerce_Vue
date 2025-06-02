import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import ProductsView from '../views/ProductsView.vue'
import MenuView from '../views/MenuView.vue'
import FavoritosView from '../views/FavoritosView.vue'
import CarrinhoView from '../views/CarrinhoView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/products',
    name: 'Products',
    component: ProductsView
  },
  {
    path: '/menu',
    name: 'Menu',
    component: MenuView
  },
  {
    path: '/favoritos',
    name: 'favoritos',
    component: FavoritosView
  },
  {
    path: '/carrinho', 
    name: 'carrinho',
    component: CarrinhoView
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
