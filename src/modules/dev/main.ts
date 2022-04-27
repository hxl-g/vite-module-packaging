// 全局通用引入
import app from '@/common/global'
import initRouter from '@/common/router/index'

// 每个模块独立的文件
import route from '@/common/router/dev'

// 开始实例化
const router = initRouter(route) // 根据不同模块初始化路由
app.use(router) // 将路由挂载到Vue实例上

app.mount('#app')
