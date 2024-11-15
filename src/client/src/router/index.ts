import { createRouter, createWebHistory } from 'vue-router'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const router = createRouter({
    linkExactActiveClass: 'ax-navbar-item__link-active',
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/pages/HomePage.vue'),
        },
        // Problem List
        {
            path: '/problems',
            name: 'problem-list',
            component: () => import('@/pages/problem/ListPage.vue'),
        },
        // Contest
        {
            path: '/contests',
            name: 'contest-list',
            component: () => import('@/pages/contest/ListPage.vue'),
        },
        {
            path: '/contest/:id/preview',
            name: 'contest-detail',
            component: () => import('@/pages/contest/DetailPage.vue'),
        },
        {
            path: '/contest/:id',
            name: 'contest-inside',
            component: () => import('@/pages/contest/InsidePage.vue'),
            children: [
                {
                    path: 'challenges',
                    name: 'challenge-list',
                    component: () => import('@/pages/contest/ChallengeListPage.vue'),
                }
            ]
        },

        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: () => import('@/pages/NotFoundPage.vue'),
        },
    ],
})

router.beforeEach((to, from, next) => {
    NProgress.start()
    next()
})

router.afterEach(() => {
    NProgress.done()
})

export default router
