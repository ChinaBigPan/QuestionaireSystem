import { GET, route, POST } from 'awilix-koa'
export default
@route("/")
@route("/index.html")
// 路由啦
class IndexController {
  constructor({indexService}) {
    this.indexService = indexService;
  }

  @GET()
  async indexAction(ctx) {
    const result = await this.indexService.getData();
    ctx.body = await ctx.render('index/pages/index', {
      data: result
    })
  }

  /**
  * 添加题目
  * @param {String} uid - 题目id
  * @param {String} qtype - 题目类型
  * @param {Object} questionObj - 题目对象
  */
  @route("/gainQuestions")
  @POST()
  async addQuestion(ctx) {
    const result = await this.indexService.addNewQuestion();
    ctx.body = result;
  }

}