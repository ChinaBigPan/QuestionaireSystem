/*
 * Created Date: Friday, August 3rd 2018, 9:43:43 pm
 * Author: daguo
 * 
 * Copyright (c) 2018 Your Company
 */
const gulp = require("gulp");
const babel = require("gulp-babel");
const watch = require("gulp-watch");
const rollup = require("gulp-rollup");
const replace = require("rollup-plugin-replace");
const gulpSequence = require("gulp-sequence");
const eslint = require('gulp-eslint');

// 上线时候glup的pm2 要修改

/**
 * 构建开发node
 */
gulp.task("builddev", () => {
  return watch("./src/server/**/*.js", { ignoreInitial: false }, () => {
    gulp.src("./src/server/**/*.js")
      .pipe(babel({
        babelrc: false,
        "plugins": ["transform-es2015-modules-commonjs", "transform-decorators-legacy"]
      })) // <- 该项配置为关闭外侧的.babelrc
      .pipe(gulp.dest("dist"));
  });
});

/**
 * 构建生产node, 不需要watch
 */
gulp.task("buildprod", () => {
  gulp.src("./src/server/**/*.js")
    .pipe(babel({
      babelrc: false,
      ignore: ["./src/server/config/*.js"],
      "plugins": ["transform-es2015-modules-commonjs",  "transform-decorators-legacy"]
    })) // <- 该项配置为关闭外侧的.babelrc
    .pipe(gulp.dest("dist"));
});

/**
 * 清理配置configclean, 生产情况 流清洗
 */
gulp.task('configclean', () => {
  gulp.src('./src/server/**/*.js')
    .pipe(rollup({
      output: {
        format: "cjs"
      },
      // 这个input就是rollup的打包文件，相当于webpack的entry
      input: "./src/server/config/index.js",
      plugins: [
        replace({
          "process.env.NODE_ENV": JSON.stringify('production')
        })
      ]
    }))
    .pipe(gulp.dest('dist'));
});

/**
 * ESlint
 */
gulp.task('lint', () => {
  gulp.src('./src/server/**/*.js')
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError())
});

// 如果是开发环境(此处为开发环境和生产环境区分)
let _task = ["builddev"];
if (process.env.NODE_ENV == "production") {
  _task = gulpSequence("lint","buildprod", "configclean");
}
if (process.env.NODE_ENV == "lint") {
  _task = ['lint']
}

gulp.task("default", _task);
