import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ArticlePage from '../views/ArticlePage.vue'
import LoginPage from '../views/LoginPage.vue'
import CreateArticlePage from '../views/CreateArticlePage.vue'
import MyArticlesPage from '../views/MyArticlesPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/article',
      name: 'article',
      component: ArticlePage
    },
    {
      path: '/create',
      name: 'create',
      component: CreateArticlePage
    },
    {
      path: '/my-articles',
      name: 'MyArticles',
      component: MyArticlesPage
    }
  ]
})

export default router
