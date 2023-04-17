import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import WarehouseDashBoardView from '../views/WarehouseDashBoardView.vue'
import Warehouse from '../components/Warehouse.vue'
import ProductsView from '../views/ProductsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../components/Login.vue')
    },
    {
      path: '/people',
      name: 'people',
      component: () => import('../components/People.vue')
    },
    {
      path: '/warehouse',
      name: 'warehouse',
      component: Warehouse,
      children: [
        { path: '', component: WarehouseDashBoardView, name: 'dashboard' }, 
        { path: 'products', component: ProductsView }
      ]
    },
    {
      path: '/warehouse_dashboard',
      name: 'warehouse_dashboard',
      component: () => import('../views/WarehouseDashboardView.vue')
    }
  ]
})

export default router
