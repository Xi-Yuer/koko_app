import path from 'path'

const config = {
  projectName: 'mini_app',
  date: '2022-12-26',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: [],
  defineConstants: {
  },
  copy: {
    patterns: [
    ],
    options: {
    }
  },
  framework: 'react',
  compiler: 'webpack4',
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {

        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
        }
      },
      cssModules: {
        enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  rn: {
    appName: 'taroDemo',
    postcss: {
      cssModules: {
        enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
      }
    }
  },
  alias: {
    '@/assets': path.resolve(__dirname, '..', 'src/assets'),
    '@/components': path.resolve(__dirname, '..', 'src/components'),
    '@/pages': path.resolve(__dirname, '..', 'src/pages'),
    '@/hooks': path.resolve(__dirname, '..', 'src/hooks'),
    '@/store': path.resolve(__dirname, '..', 'src/store'),
    '@/utils': path.resolve(__dirname, '..', 'src/utils'),
    '@/enum': path.resolve(__dirname, '..', 'src/enum'),
    '@/service': path.resolve(__dirname, '..', 'src/service')
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
