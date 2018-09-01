"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
 * File: IndexModel.js
 * Project: structure-first
 * File Created: Saturday, 4th August 2018 1:42:24 pm
 * Author: Daguo (gxp5189468@163.com)
 * -----
 * Last Modified: Saturday, 4th August 2018 1:57:15 pm
 * Modified By: Daguo (gxp5189468@163.com>)
 * -----
 * Copyright 2018 - 2018 以后有了再说, 以后有了再说
 */

/**
 * @fileOverview 实现Index数据模型
 */

/**
 * IndexModel类 生成一段异步数据
 * @class
 */
let IndexService = class IndexService {
  /**
   * @constructor
   * @param {String} app koa2的上下文s
   */
  constructor(app) {}

  /**
   * 获取具体数据的API接口
   * @returns {Promise} 返回异步数据
   */
  getData() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("IndexAction异步数据");
      }, 1000);
    });
  }

};
exports.default = IndexService;