import { createRouter, createWebHistory } from 'vue-router'

import Join from '../views/Join.vue'
import MainPage from '../views/MainPage.vue'
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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Join
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/community',
      name: 'community',
      component: () => import('../views/Community.vue')
    }
  ]
})

router.beforeEach((to) => {
  const auth = userAuth()
  if (to.meta.requiresAuth && !auth.isLoggedIn) return '/login'
})

export default router
