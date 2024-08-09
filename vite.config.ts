import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "/src/assets/styles/index.scss";`
      },
    }
  },
  resolve: {
    alias: {
      "@/*": '/src/*',
    }
  },
  server: {
    // 是否自动打开浏览器
    open: true,
    // 服务器主机名，如果允许外部访问，可设置为"0.0.0.0"
    host: '0.0.0.0',
    // 服务器端口号
    port: 1260,
    // 代理
    proxy: {
      '/v1/apigateway': { // 页面中发起一个请求http://localhost/v1/apigateway/getInfo，那么经过本地代理处理后，实际转发到api服务器的地址是http://12.12.12.12/v1_redirect/apigateway/getInfo。
        target: `http://12.12.12.12/`,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/v1_redirect\/apigateway/, '')
      },
    }
  }

})
