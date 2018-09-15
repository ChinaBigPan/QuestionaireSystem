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
import axios from 'axios';
 /**
  * @fileOverview 实现Index数据模型
  */
const tempParams = {
  ip: '192.168.0.21'
}

// const tempParams = {
//   ip: 'xxxxxxxx'
// }

/**
 * IndexModel类 生成一段异步数据
 * @class
 */
class IndexService {
  /**
   * @constructor
   * @param {String} app koa2的上下文
   */
  constructor(app) {
    
  }

  /**
   * 获取具体数据的API接口
   * @returns {Promise} 返回异步数据
   */
  getData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("IndexAction异步数据");
      }, 1000)
    })
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
        params: {
          uid, qtype, questionObj
        }
      }
      axios.post(url, paramObj).then((res) => {
        resolve(res.data)
      }).catch((error) => {
        reject(error)
      })
    })
  }

  /**
   * 修改题目
   * @param {Number} uid - 题目ID
   * @param {String} qid - 题目类型
   */
  updateQuestion(uid, qid) {
    return new Promise((resolve, reject) => {
      const url = `${tempParams.ip}/exam/question/modify`;
      const paramObj = {
        params: {
          uid, qid
        }
      }
      axios.put(url, paramObj).then((res) => {
        resolve(res.data);
      }).catch((error) => {
        reject(error)
      })
    })
  }

  /**
   * 获取题目
   * @param {Number} uid - 题目ID
   * @param {String} qid - 题目类型
   */
  getQuestion(uid, qid) {
    return new Promise((resolve, reject) => {
      const url = `${tempParams.ip}/exam/question/get`;
      const param = {
        params: {
          uid, qid
        }
      }
      axios.get(url, param).then((res) => {
        resolve(res.data)
      }).catch((error) => {
        reject(error)
      })
    })
  }

  /**
   * 获取本人提交的题目列表
   * @param {Number} uid - 用户ID
   * @param {Number} page - 分页 
   * @param {Number} count - 每页数量，最小值1，最大值100
   * @param {Array} condition - 筛选条件数组。当前只支持审核是否通过这一个条件 
   */
  gainOnesSubmittedList(uid, page, count, condition = [ { 'auditing': 0 } ]) {
    return new Promise((resolve, reject) => {
      const url = `${tempParams.ip}/exam/question/list`;
      const param = {
        params: {
          uid, page, count, condition
        }
      }
      axios.get(url, param).then((res) => {
        resolve(res.data);
      }).catch((error) => {
        reject(error);
      })
    })
  }

  
  /**
   * 随机获取单个题目
   * @param {Number} id - 用户id
   */
  getRandomQuestion(id) {
    return new Promise((resolve, reject) => {
      const url = `${tempParams.ip}/exam/question/round`;
      const param = {
        params: {
          id
        }
      }
      axios.get(url, param).then((res) => {
        resolve(res.data);
      }).catch((error) => {
        reject(error);
      })
    })
  }

  /**
   * 提交并返回正确答案
   * @param {Number} uid - 用户Id
   * @param {Number} qid - 问题Id
   * @param {String} qtype - 问题类型
   * @param {Boolean} answer  
   */
  submitAnswer(uid, qid, qtype, answer) {
    return new Promise((resolve, reject) => {
      const url = `${tempParams.ip}/exam/question/submit`;
      const param = {
        params: {
          uid, qid, qtype, answer
        }
      }
      axios.get(url, param).then((res) => {
        resolve(res.data);
      }).catch((error) => {
        reject(error)
      })
    })
  }

  /**
   * 获取所有人提交的题目列表
   * @param {Number} uid - 当前用户id
   * @param {Number} page - 分页，从1开始
   * @param {Number} count - 每页数量，最小值1，最大值100 
   * @param {Array} condition - // 筛选条件数组。当前只支持审核是否通过这一个条件
   */
  getQuestionList(uid, page = 1, count, condition = [{'auditing': 0}]) {
    if (page < 1 || page > 100) {
      alert('页码最小值为1，最大值为100');
      return;
    }
    return new Promise((resolve, reject) => {
      const url = `${tempParams.ip}/exam/admin/question/list`;
      const param = {
        params: {
          uid, page, count, condition
        }
      }
      axios.get(url, param).then((res) => {
        resolve(res.data);
      }).catch((error) => {
        reject(error);
      })
    })
  }

  /**
   * 获取题目详情
   * @param {Number} uid - 用户ID 
   * @param {String} qid - 题目ID
   */
  getQuestionDetail(uid, qid) {
    return new Promise((resolve, reject) => {
      const url = `${tempParams.id}/exam/admin/question/get`;
      const param = {
        params: {
          uid, qid
        }
      }
      axios.get(url, param).then((res) => {
        resolve(res.data);
      }).catch((error) => {
        reject(error);
      })
    })
  }

  /**
   * 审核题目
   * @param {Number} uid - 用户Id
   * @param {Number} qid - 题目Id
   * @param {Boolean} flag - 是否审核通过 
   */
  auditQuestion(uid, qid, flag) {
    return new Promise((resolve, reject) => {
      const url = `${tempParams.id}/exam/admin/question/get`;
      const param = {
        params: {
          uid, qid, flag
        }
      }
      axios.get(url, param).then((res) => {
        resolve(res.data);
      }).catch((error) => {
        reject(error);
      })

    })
  }

  /**
   * 删除题目
   * @param {Number} uid - 当前用户ID 
   * @param {Number} qid - 题目编号
   */
  deleteQuestion(uid, qid) {
    return new Promise((resolve, reject) => {
      const url = `${tempParams.id}/exam/admin/question/delete`;
      const param = {
        params: {
          uid, qid
        }
      }
      axios.get(url, param).then((res) => {
        resolve(res.data);
      }).catch((error) => {
        reject(error)
      })
    })
  }

}

export default IndexService