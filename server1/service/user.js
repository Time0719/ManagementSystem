const allSqlAction = require("../lib/mysql");
const Md5 = require('ts-md5/dist/md5');


const getList = async () => {
    const sql = 'SELECT * from user';

    allSqlAction(sql).then(res => {
        console.log(res);
    })
};

async function checkUser(user, pwd) {
    let sql = `select * from elm_user where name = ${user} and pwd=${pwd}`
    return allSqlAction.allSqlAction(sql).then(res => {
        if (res.length === 1 && res[0].name === user && res[0].pwd === pwd) {
            return { msg: "登陆成功", code: 200 }
        } else {
            return { msg: "登录失败", code: 201 }
        }
    })
};

async function findUser(user, pwd) {
    let sql = `select * from elm_user where name = ${user}`
    return allSqlAction.allSqlAction(sql).then(res => {
        if (res.length === 0) {
            return registerUser(user, pwd)
        } else {
            return { msg: "用户已存在", code: 202 }
        }
    })
};

async function registerUser(user, pwd) {
    let sql = `insert into elm_user (elm_userPhone,elm_userPassword) values ('${user}','${md5Pwd(pwd)}')`
    return allSqlAction.allSqlAction(sql).then(res => {
        if (res.affectedRows === 1) {
            return { msg: "注册成功", code: 200 }
        } else {
            return { msg: "注册失败", code: 200 }
        }
    })
};

module.exports = {
    checkUser,
    findUser,
    registerUser,
    getList
};

// Router.post('/register', (req, res) => {
//     const { user, pwd, type } = req.body;
//     User.findOne({ user }, (err, doc) => {
//         if (doc) {
//             return res.json({ code: 1, msg: '用户名重复' });
//         }
//         const userModel = new User({ user, type, pwd: md5Pwd(pwd) });
//         userModel.save((e, d) => {
//             if (e) {
//                 return res.json({ code: 1, msg: '后端出错了' });
//             }
//             const { user, type, _id } = d;
//             res.cookie('userid', _id);
//             return res.json({ code: 0, data: { user, type, _id } });
//         });
//     });
// });

// Router.get('/info', (req, res) => {
//     const { userid } = req.cookies;
//     if (!userid) {
//         return res.json({ code: 1 });
//     }
//     User.findOne({ _id: userid }, _filter, (err, doc) => {
//         if (err) {
//             return res.json({ code: 1, msg: '后端出错了' });
//         }
//         if (doc) {
//             return res.json({ code: 0, data: doc });
//         }
//     });
// });

const md5Pwd = (pwd) => {
    const salt = 'lanyee_is_good_3957x8yza6!@#IUHJh~~';
    return Md5.hashStr(pwd + salt);
};