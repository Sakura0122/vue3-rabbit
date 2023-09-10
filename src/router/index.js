import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/views/layout/index.vue'),
      children: [
        { path: '', component: () => import('@/views/home/index.vue') },
        { path: 'category', component: () => import('@/views/category/index.vue') }
      ]
    },
    { path: '/login', component: () => import('@/views/login/index.vue') }
  ]
})

export default router
