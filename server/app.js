const Koa = require('koa');
var Router = require('koa-router');
const Config = require("./config");
// const Md5 = require("ts-md5/dist/md5");


//npm install koa --save

const app = new Koa();
const router = new Router();

const bodyParser = require('koa-bodyparser')
// 配置中间件(bodyParser一定要在router前面插入)
app.use(bodyParser())

//设置跨域请求
app.use(async (ctx, next) => {
	ctx.set('Access-Control-Allow-Origin', '*');
	ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
	ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
	if (ctx.method === 'OPTIONS') {
		ctx.body = 200;
	} else {
		await next();
	}
});


router.get('/', async (ctx) => {
	const sql = `SELECT * FROM User`;
	const res = await Config.allSqlAction(sql);
	ctx.response.body = res;
})

// @todo 查询登录状态
router.post('/info', async (ctx) => {
	const { id } = ctx.request.body;
	if (id) {
		const sql = `SELECT * FROM User WHERE id = '${id}'`;
		const res = await Config.allSqlAction(sql);
		ctx.body = { code: 0, data: res };
	} else {
		ctx.body = { code: 1 };
	}
})

//@todo 注册
router.post('/register', async (ctx) => {
	const { name, password } = ctx.request.body;
	const sql = `INSERT INTO User (name,password) values ('${name}','${password}')`
	const res = await Config.allSqlAction(sql);
	res.affectedRows === 1 ?
		ctx.body = { code: 0, data: res } :
		ctx.body = { code: 1, msg: "注册失败" };
})


// @todo 登录
router.post('/login', async (ctx) => {
	const { name, password } = ctx.request.body;
	const sql = `SELECT * FROM User WHERE name = '${name}' AND password = '${password}'`;
	const res = await Config.allSqlAction(sql);
	console.log(res.l);
	res.length === 0 ?
		ctx.body = { code: 1, msg: '用户名或者密码错误' } :
		ctx.body = { code: 0, data: res };
})



//中间件
// app.use(async (ctx)=> {
// 	ctx.body = '这是住建局'
// })

//启动路由
app.use(router.routes())
	.use(router.allowedMethods())


app.listen(9093, () => {
	console.log(`端口9093启动中`)
});

// const md5Pwd = (pwd) => {
//     const salt = 'lanyee_is_good_3957x8yza6!@#IUHJh~~';
//     return Md5.hashStr(pwd + salt);
// };