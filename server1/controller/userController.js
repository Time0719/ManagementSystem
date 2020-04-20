const user = require("../service/user");

async function getData(ctx, next) {
    // let { user, pwd } = ctx.request.body
    let data = await user.getList()
    console.log(data);
    // return ctx.response.body = data
};

async function checkLogin(ctx, next) {
    let { user, pwd } = ctx.request.body
    let data = await user.checkUser(user, pwd)
    return ctx.response.body = data
};

async function registerUser(ctx, next) {
    let { user, pwd } = ctx.request.body
    let data = await user.findUser(user, pwd)
    return ctx.response.body = data
};

module.exports = {
    checkLogin,
    registerUser,
    getData
};