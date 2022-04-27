import { RouteRecordRaw } from 'vue-router'

import module1Route from '@/common/router/module1'
import module2Route from '@/common/router/module2'

// 开发的时候集成所有路由
const route: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/module1'
  },
  ...module1Route,
  ...module2Route
]
export default route
