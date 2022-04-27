const modulesConfig: any = {
  // 开发
  dev: {
    entry: '/src/modules/dev/main.ts', // 入口文件
    outDir: 'dist/dev' // 输出目录
  },
  // 模块1
  module1: {
    entry: '/src/modules/module1/main.ts', // 入口文件
    outDir: 'dist/module1' // 输出目录
  },
  // 模块2
  module2: {
    entry: '/src/modules/module2/main.ts', // 入口文件
    outDir: 'dist/module2' // 输出目录
  }
}

export default modulesConfig
