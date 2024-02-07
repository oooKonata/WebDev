import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 引入path，如果显示红色语法提示，安装@types/node解决（这是一个TypeScript的声明文件包，描述Node.js核心模块和常用第三方库的类型信息）
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // src文件夹配置别名“@”
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
