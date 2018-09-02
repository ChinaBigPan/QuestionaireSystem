'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @fileOverview 实现Index数据模型
 */
const tempParams = {
  ip: '192.168.0.21'

  /**
   * IndexModel类 生成一段异步数据
   * @class
   */
}; /*
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
let IndexService = class IndexService {
  /**
   * @constructor
   * @param {String} app koa2的上下文
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

  /**
   * // 获取数据
   * @param {Number} uid 
   * @param {String} qtype 
   * @param {Objevt} questionObj 
   */
  addNewQuestion(uid, qtype, questionObj) {
    return new Promise((resolve, reject) => {
      const url = `${tempParams.ip}/exam/question/add`;
      const paramObj = {
        uid, qtype, questionObj
      };
      _axios2.default.post(url, JSON.stringify(paramObj)).then(function (res) {
        resolve(res.data);
      }).catch(function (e) {
        reject(e);
      });
    });
  }

  updateQuestion(uid, qid) {}

};
exports.default = IndexService;