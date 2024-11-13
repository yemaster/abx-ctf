import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  linkExactActiveClass: 'ax-navbar-item__link-active',
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/HomeView.vue'),
    },
    {
      path: '/problems',
      name: 'problem-list',
      component: () => import('@/pages/problems/ListView.vue'),
    },
  ],
})

export default router
