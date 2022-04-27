import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const initRouter = (routes: Array<RouteRecordRaw>): any => {
  const router = createRouter({
    history: createWebHashHistory(),
    routes
  })
  return router
}

export default initRouter
