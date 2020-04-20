const mysql = require("mysql");
/*建立连接池*/
const pool = mysql.createPool({
    database: 'webapp', //数据库名称
    user: 'root', //mysql用户名
    password: '123', //mysql密码
    PORT: '9093', //mysql端口号
    host: "192.168.2.53" //服务器ip
});
/*连接数据库*/
const allSqlAction = (sql, value) => {
    return new Promise((resolve, reject) => {
        pool.getConnection(function (error, connection) {
            if (error) {
                console.log(error);
                reject(error);
            }
            else {
                console.log("数据库连接成功");
                connection.query(sql, value, (error, results) => {
                    if (error) reject(error);
                    else {
                        resolve(results);
                    }
                    connection.release();
                })
            }
        })
    })
};
module.exports = {
    allSqlAction
};