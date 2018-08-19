const HappyWebpack = require("happypack");
const os = require("os");
const happyThreadPool = HappyWebpack.ThreadPool({
  size: os.cpus().length
})
module.exports = [
  // 提取打包CSS
  // new HappyWebpack({
  //   id: 'happyCSS',
  //   threadPool: happyThreadPool,
  //   verbose: true,
  //   loaders: ['style-loader', 'css-loader']
  // }),
  // 提取打包TS
  new HappyWebpack({
    id: 'happyTS',
    threadPool: happyThreadPool,
    verbose: true,
    loaders: [{
      path: "ts-loader",
      query: {
        happyPackMode: true
      }
    }]
  })
]