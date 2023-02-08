import { createRouter, createWebHistory } from 'vue-router'
import CatalogView from "@/views/CatalogView.vue";
import RegisterView from "@/views/RegisterView.vue";
import OrderView from '../views/OrderView.vue'
import LoginView from "@/views/LoginView.vue";
import BasketView from "@/views/BasketView.vue";
import store from '../store'


const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next()
    return
  }
  next('/')
}

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next()
    return
  }
  next('/login')
}

const routes = [
  {
    path: '/',
    redirect:{name:'catalog'}
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: CatalogView,
    beforeEnter: ifAuthenticated
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    beforeEnter: ifNotAuthenticated
  },
  {
    path: '/basket',
    name: 'basket',
    component: BasketView
  },
  {
    path: '/order',
    name: 'order',
    component: OrderView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
