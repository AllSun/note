import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import postcsspxtorem from 'postcss-pxtorem';
import { resolve } from 'path'



const __dirname = new URL('.', import.meta.url).pathname;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),

  ],
  css: {
    modules: {
      localsConvention: 'dashesOnly'
    },
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript
        javascriptEnabled: true,
      }
    },
    postcss: {
      plugins: [
        postcsspxtorem({
          rootValue: 37.5,
          propList: ['*'],
          unitPrecision: 5,
          selectorBlackList: [],
          replace: true,
          mediaQuery: false,
          minPixelValue: 0
        })
      ]
    }
  },
  server: {
    host: true, // 允许局域网访问
    port: 5173, // 可以根据需要更改端口
    proxy: {
      '/api': {
        // 当遇到 /api 路径时，将其转换成 target 的值
        target: '127.0.0.1:7001',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '') // 将 /api 重写为空
      },
      '/public': {
        target: '127.0.0.1:7001', 
        changeOrigin: true,
      }
    }
  },

  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'), // src 路径
    }
  },



})
