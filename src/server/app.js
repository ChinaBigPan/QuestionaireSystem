import Koa from "koa";
// import router from 'koa-simple-router';
import koaSwig from 'koa-swig';
import co from 'co';
import koaStatic from 'koa-static';
import config from './config'
import errorHandler from './middlewares/errorHandler';
import log4js from 'log4js';
// Awilix helpers, router and scope-instantiating middleware for Koa
import { asClass, asValue, createContainer, Lifetime } from 'awilix';
import { scopePerRequest, loadControllers } from 'awilix-koa'

log4js.configure({
  appenders: { cheese: { type: 'file', filename: __dirname + '/logs/serverLog.log' } },
  categories: { default: { appenders: ['cheese'], level: 'error' } }
});
const logger = log4js.getLogger('cheese');

const app = new Koa();
// 创建IOC（控制反转）容器
const IOCcontainer = createContainer();
// 每一次请求都是new 一次类
// 现在实现的是所有的service要自动地注入到Controller,
// Controller要把所有的service用面向切面的形式
// 插入到构造函数里，不影响真正的逻辑
// 每次要保证外面的service重新创建实例，所以必须要有控制反转实例
app.use(scopePerRequest(IOCcontainer));
// 装载service
IOCcontainer.loadModules([__dirname + '/service/*.js'], {
  formatName: "camelCase",
  resolverOption:{
    lifetime: Lifetime.SCOPED
  }
});

app.context.render = co.wrap(koaSwig({
  root: config.viewDir,
  autoscape: true,
  cache: 'memory',
  ext: 'html',
  varControls: ["<%", "%>"],
  writeBody: false
}))
// 在路由初始化之前定义错误
errorHandler.error(app, logger);
// 自动注册所有的路由
app.use(loadControllers('./controller/*.js'), { cwd: __dirname })
app.use(koaStatic(config.staticDir));
app.listen(config.port, () => {
  console.log(`监听接口： ${config.port}`)
})