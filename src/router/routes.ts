import { RouteRecordRaw } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import AboutLayout from '@/layouts/AboutLayout.vue'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '',
        component: () => import('@/pages/HomePage.vue'),
      },
    ],
  },
  {
    path: '/about',
    component: AboutLayout,
    children: [
      {
        path: '',
        component: () => import('@/pages/AboutPage.vue'),
      },
    ],
  },
]
