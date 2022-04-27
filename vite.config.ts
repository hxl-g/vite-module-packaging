import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
// 如果编辑器提示 path 模块找不到，则可以安装一下 @types/node -> npm i @types/node -D
import { resolve } from 'path'
import { createHtmlPlugin } from 'vite-plugin-html'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
import modulesConfig from './config/index'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const envConfig = loadEnv(mode, './envs')
  const { VITE_MODULE_NAME } = envConfig
  const { entry, outDir } = modulesConfig[VITE_MODULE_NAME]

  return {
    plugins: [vue(), createHtmlPlugin({ entry }), VueSetupExtend()],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src') // 设置 `@` 指向 `src` 目录
      }
    },
    base: './', // 设置打包路径
    server: {
      port: 8080, // 设置服务启动端口号
      open: false, // 设置服务启动时是否自动打开浏览器
      cors: true, // 允许跨域
      host: '0.0.0.0'

      // 设置代理，根据我们项目实际情况配置
      // proxy: {
      //   '/api': {
      //     target: 'http://xxx.xxx.xxx.xxx:8000',
      //     changeOrigin: true,
      //     secure: false,
      //     rewrite: (path) => path.replace('/api/', '/')
      //   }
      // }
    },
    css: {
      // 使用scss全局变量
      preprocessorOptions: {
        scss: {
          additionalData: '@import "src/common/style/theme.scss";'
        }
      }
    },
    build: {
      outDir, // 指定输出路径（相对于 项目根目录)
      rollupOptions: {
        output: {
          manualChunks(id) {
            // 将pinia的全局库实例打包进vendor，避免和页面一起打包造成资源重复引入
            if (id.includes(resolve(__dirname, '/src/store/index.ts'))) {
              return 'vendor'
            }
            return null
          }
        }
      }
    }
  }
})
