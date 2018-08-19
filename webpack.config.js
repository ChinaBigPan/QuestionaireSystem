// 获取node命令的参数
const argv = require('yargs-parser')(process.argv.slice(2));
const merge = require('webpack-merge');
const mode = argv.mode || "development";
const _modeFlag = (mode === "production" ? true : false);
const glob = require("glob");
const _mergeConfig = require(`./config/webpack.${mode}.js`);
const HappyWebpackPlugin = require("./config/happyWebpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { join, resolve } = require("path");
const HTMLAfterWebpackPlugin = require("./config/htmlAfterWebpackPlugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const postcssPresetEnv = require('postcss-preset-env');

// 配置
const configDev = require('./config/webpack.development');
const configProd = require('./config/webpack.production');

// 配置vue
const VueLoaderPlugin = require('vue-loader/lib/plugin');

let _entry = {}; // 空的入口文件
let _plugins = [];
const files = glob.sync("./src/www/views/**/*.entry.ts");
// 将所有的entry文件放到entry配置里面
// index-index.entry.ts
// 验证文件的正则
let matchedReg = /.+\/([a-zA-Z]+-[a-zA-Z]+)(\.entry\.ts$)/g;

for (let item of files) {
  if (matchedReg.test(item) == true) {
    const entryKey = RegExp.$1;
    // 需要规定好entry的名字
    _entry[entryKey] = item;
    const [dist, template] = entryKey.split("-");
    _plugins.push(new HtmlWebpackPlugin({
      filename: `../views/${dist}/pages/${template}.html`,
      template: `src/www/views/${dist}/pages/${template}.html`,
      inject: false,
      chunks: [entryKey],
      minify: {
        collapseWhitespace: _modeFlag,
        removeAttributeQuotes: _modeFlag
      }
    }))
  }
}

let webpackConfig = {
  // 用正则匹配到views下面有多少entry
  entry: _entry,
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test:/\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it use publicPath in webpackOptions.output
              // publicPath: '../'
            }
          },
          { loader: 'vue-style-loader' },
          { 
            loader: 'css-loader', 
            options: { 
              importLoaders: 1,
              // 开启CSS Modules
              modules: true,
              // 自定义生成的类名
              localIdentName: '[local]_[hash:base64:4]'
            } 
          },
          {
            loader: 'postcss-loader',
            options: {
                config: {
                    path: resolve(__dirname, './postcss.config.js')
                }
            }
          }
          
        ]
      },
      {
        test: /\.ts?$/,
        use: "happypack/loader?id=happyTS",
        options: {
          appendTsSuffixTo: [/.vue$/]
        }
      }
    ]
  },
  output: {
    path: join(__dirname, './dist/assets'),
    publicPath: "/",
    filename: "scripts/[name].bundle.js"
  },
  plugins: [
    ..._plugins,
    ...HappyWebpackPlugin,
    new HTMLAfterWebpackPlugin(),
    new VueLoaderPlugin()
  ],
  resolve: {
    extensions: [".ts", ".css"]
  }
}


module.exports = merge(webpackConfig, _mergeConfig);