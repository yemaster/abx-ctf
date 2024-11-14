import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    linkExactActiveClass: 'ax-navbar-item__link-active',
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/pages/HomePage.vue'),
        },
        {
            path: '/problems',
            name: 'problem-list',
            component: () => import('@/pages/problem/ListPage.vue'),
        },

        {
            path: '/:pathMatch(.*)*', 
            name: 'not-found',
            component: () => import('@/pages/NotFoundPage.vue'),
        },
    ],
})

export default router
