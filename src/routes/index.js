import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import ProductsView from '../views/ProductsView.vue'
import CarrinhoView from '../views/CarrinhoView.vue'
import ProductDetail from '../views/ProductDetailView.vue'

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
    path: '/carrinho', 
    name: 'carrinho',
    component: CarrinhoView
  },
  {
    path: '/product/:id',
    name: 'productdetail',
    component: ProductDetail
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
