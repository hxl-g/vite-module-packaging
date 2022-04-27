import { RouteRecordRaw } from 'vue-router'

// 路由
const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/module2'
  },
  {
    path: '/module2',
    name: 'Module2',
    redirect: '/module2/about',
    component: (): Promise<any> => import('@/modules/module2/Index.vue'),
    children: [
      {
        path: '/module2/about',
        name: 'About',
        component: (): Promise<any> => import('@/modules/module2/views/about/Index.vue')
      },
      {
        path: '/module2/page',
        name: 'Page',
        component: (): Promise<any> => import('@/modules/module2/views/page/Index.vue')
      }
    ]
  }
]

export default routes
