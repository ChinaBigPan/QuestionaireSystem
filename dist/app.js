'use strict';

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _koaSwig = require('koa-swig');

var _koaSwig2 = _interopRequireDefault(_koaSwig);

var _co = require('co');

var _co2 = _interopRequireDefault(_co);

var _koaStatic = require('koa-static');

var _koaStatic2 = _interopRequireDefault(_koaStatic);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _errorHandler = require('./middlewares/errorHandler');

var _errorHandler2 = _interopRequireDefault(_errorHandler);

var _log4js = require('log4js');

var _log4js2 = _interopRequireDefault(_log4js);

var _awilix = require('awilix');

var _awilixKoa = require('awilix-koa');

var _koaCors = require('koa-cors');

var _koaCors2 = _interopRequireDefault(_koaCors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_log4js2.default.configure({
  appenders: { cheese: { type: 'file', filename: __dirname + '/logs/serverLog.log' } },
  categories: { default: { appenders: ['cheese'], level: 'error' } }
});
// Awilix helpers, router and scope-instantiating middleware for Koa

// import router from 'koa-simple-router';

const logger = _log4js2.default.getLogger('cheese');

const app = new _koa2.default();

// 创建IOC（控制反转）容器
const IOCcontainer = (0, _awilix.createContainer)();
// 每一次请求都是new 一次类
// 现在实现的是所有的service要自动地注入到Controller,
// Controller要把所有的service用面向切面的形式
// 插入到构造函数里，不影响真正的逻辑
// 每次要保证外面的service重新创建实例，所以必须要有控制反转实例
app.use((0, _awilixKoa.scopePerRequest)(IOCcontainer));
app.use((0, _koaCors2.default)());

// 装载service
IOCcontainer.loadModules([__dirname + '/service/*.js'], {
  formatName: "camelCase",
  resolverOption: {
    lifetime: _awilix.Lifetime.SCOPED
  }
});

app.context.render = _co2.default.wrap((0, _koaSwig2.default)({
  root: _config2.default.viewDir,
  autoscape: true,
  cache: 'memory',
  ext: 'html',
  varControls: ["<%", "%>"],
  writeBody: false
}));
// 在路由初始化之前定义错误
_errorHandler2.default.error(app, logger);
// 自动注册所有的路由
app.use((0, _awilixKoa.loadControllers)('./controller/*.js'), { cwd: __dirname });
app.use((0, _koaStatic2.default)(_config2.default.staticDir));
app.listen(_config2.default.port, () => {
  console.log(`监听接口： ${_config2.default.port}`);
});