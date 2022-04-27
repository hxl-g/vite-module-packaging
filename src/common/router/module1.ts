import { RouteRecordRaw } from 'vue-router'

// 路由
const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/module1'
  },
  {
    path: '/module1',
    name: 'Module1',
    redirect: '/module1/demo',
    component: (): Promise<any> => import('@/modules/module1/Index.vue'),
    children: [
      {
        path: '/module1/demo',
        name: 'Demo',
        component: (): Promise<any> => import('@/modules/module1/views/demo/Index.vue')
      },
      {
        path: '/module1/home',
        name: 'Home',
        component: (): Promise<any> => import('@/modules/module1/views/home/Index.vue')
      }
    ]
  }
]

export default routes
