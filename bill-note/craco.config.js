const path = require('path')
const CracoLessPlugin = require('craco-less');


module.exports = {
  //webpack配置
  webpack: {
    //配置别名
    alias: {
      //约定使用 @ 表示 src文件所在路径
      '@': path.resolve(__dirname, 'src'),
      'utils': path.resolve(__dirname, 'src/utils') // src 路径
    }
  },

  resolve: {
    fallback: {
      "buffer": require.resolve("buffer/"),
      // 如果你需要其他 Node.js 核心模块的 polyfill，也可以在这里添加
    }
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#1DA57A',
              '@link-color': '#1DA57A',
              '@border-radius-base': '2px',
            },
            javascriptEnabled: true,
          },
        },
      },
    },

  ],


  style: {
    postcss: {
      mode: 'extends' ,
      loaderOptions: {
        postcssOptions: {
          ident: 'postcss',
          plugins: [
            [
              'postcss-pxtorem',
              {
                rootValue: 40, // 根元素字体大小
                // propList: ['width', 'height']
                propList: ['*'],
              },
            ],
          ],
        },

      },
    },
  },

  devServer: {
    proxy: {
      "/api": {
        // 当遇到 /api 路径时，将其转换成 target 的值
        target: 'http://127.0.0.1:7001',
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }

} 