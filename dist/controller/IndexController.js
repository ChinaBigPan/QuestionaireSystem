"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dec, _dec2, _dec3, _dec4, _dec5, _class, _desc, _value, _class2;

var _awilixKoa = require("awilix-koa");

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

exports.default = (
// 路由啦
_dec = (0, _awilixKoa.route)("/"), _dec2 = (0, _awilixKoa.route)("/index.html"), _dec3 = (0, _awilixKoa.GET)(), _dec4 = (0, _awilixKoa.route)("/test"), _dec5 = (0, _awilixKoa.POST)(), _dec(_class = _dec2(_class = (_class2 = class IndexController {
  constructor({ indexService }) {
    this.indexService = indexService;
  }

  async indexAction(ctx) {
    const result = await this.indexService.getData();
    ctx.body = await ctx.render('index/pages/index', {
      data: result
    });
  }

  /**
  * 添加题目
  * @param {String} uid - 题目id
  * @param {String} qtype - 题目类型
  * @param {Object} questionObj - 题目对象
  */

  async addQuestion(ctx) {
    const result = await this.indexService.addNewQuestion();
    ctx.body = result;
  }

}, (_applyDecoratedDescriptor(_class2.prototype, "indexAction", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "indexAction"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "addQuestion", [_dec4, _dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "addQuestion"), _class2.prototype)), _class2)) || _class) || _class);