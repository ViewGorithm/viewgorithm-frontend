import { createRouter, createWebHistory } from 'vue-router'

import Join from '../views/Join.vue'
import MainPage from '../views/MainPage.vue'
import Login from '../views/Login.vue'
import Community from '../views/Community.vue'
import { userAuth } from '@/stores/userAuth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainPage
    },
    {
      path: '/join',
      name: 'join',
      component: Join
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/community',
      name: 'community',
      component: Community
    }
  ]
})

router.beforeEach((to) => {
  const auth = userAuth()
  if (to.meta.requiresAuth && !auth.isLoggedIn) return '/login'
})

export default router
