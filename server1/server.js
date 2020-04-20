const Koa = require('koa');
const mysql = require('./mysql');

const app =  new Koa();

app.use(async (ctx) => {
    let data = await mysql.query()
    ctx.body = {
        "code": 1,
        "data": data,
        "mesg": 'ok'
    }
    
})

app.listen(9093)

console.log(`listening on port 9093`)

