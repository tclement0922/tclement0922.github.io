import { createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const options = {
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    }
  ]
}

export default options
