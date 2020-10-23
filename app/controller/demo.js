'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async test1() {
    const { ctx } = this;
    const {req, query} = ctx
    console.log(ctx.isServer,'ctx')
    console.log(query)
    console.log(ctx.isServer)
    const context = {content:'content'};
    const render = require('../umi.server')
    console.log(render)
    const { html, error, rootContainer } = await render({
      // 有需要可带上 query
      context,
      path: req.url,
      getInitialPropsCtx: {
        req:req.url,  //客户端可在ctx.req中获取带参
      },
      
  
    });
    ctx.type = 'text/html';
    ctx.status = 200;
    ctx.body = html
  }
}

module.exports = HomeController;
