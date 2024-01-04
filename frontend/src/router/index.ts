import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ArticlePage from '../views/ArticlePage.vue'
import LoginPage from '../views/LoginPage.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/log',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/article',
      name: 'article',
      component: ArticlePage
    }
  ]
})

export default router
