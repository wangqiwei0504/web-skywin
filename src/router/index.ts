import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
  RouteRecordRaw
} from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/goal',
    component: () => import('@/views/home/index.vue'),
    children: [
      {
        path: '/goal',
        name: 'goal',
        component: () => import('@/views/home/goals.vue')
      },
      {
        path: '/tech',
        name: 'tech',
        component: () => import('@/views/home/tech.vue')
      },
      {
        path: '/crypto',
        name: 'crypto',
        component: () => import('@/views/home/crypto.vue')
      },
      {
        path: '/teacher',
        name: 'teacher',
        component: () => import('@/views/home/teacher.vue')
      },
      {
        path: '/contact',
        name: 'contact',
        component: () => import('@/views/home/contact.vue')
      }
    ]
  }
];

const router = createRouter({
  // history: createWebHistory(),    // 使用history模式
  history: createWebHashHistory(), // 使用hash模式
  routes
});

export default router;
