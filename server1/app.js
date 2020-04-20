/**
 * app.js是整个server的入口文件，注册了router和各种中间件；
 * config是数据库的配置文件，里面DBconfig.js来统一管理数据库的配置；
 * controller文件夹MVC架构下的controller层router文件夹来处理不同的路径请求，导入到对应的controller；
 * service文件夹是MVC的业务层，处理来自controller的数据，查询后数据库处理后返回处理后的数据；
 */

const Koa = require("koa");
const router = require("./router/router");
const bodyParser = require("koa-body");
const app = new Koa();

app.use(bodyParser());
app.use(router.routes());
app.use(async (ctx) => {
    console.log("404 Not Found")
});

console.log("配置服务器已启动，端口号9093...");

app.listen(9093);