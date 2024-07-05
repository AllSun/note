const path = require('path')
const CracoLessPlugin = require('craco-less');
const postcssPxToRem = require("postcss-pxtorem")


module.exports = {
  //webpack配置
  webpack: {
    //配置别名
    alias: {
      //约定使用 @ 表示 src文件所在路径
      '@': path.resolve(__dirname, 'src')
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
                rootValue: 32, // 根元素字体大小
                // propList: ['width', 'height']
                propList: ['*'],
              },
            ],
          ],
        },

      },
    },
  },

} 