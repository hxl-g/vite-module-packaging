// 外部插件
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

// 内部资源文件
import App from '@/App.vue'
import { registerStore } from '@/common/store'

// 样式文件
import 'element-plus/dist/index.css'
import '@/common/style/variables.scss'

// 开始实例化
const app: any = createApp(App) // 创建Vue应用实例app
const pinia = createPinia() // 实例化 Pinia

app.use(pinia) // 注册 Pinia
app.use(ElementPlus, {
  locale: zhCn
}) // 安装 ElementPlus
registerStore() // 注册Pinia

export default app
