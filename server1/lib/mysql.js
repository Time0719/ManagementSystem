const mysql = require("mysql");
const DBConfig = require("../config/DBConfig");
/*建立连接池*/
let pool = mysql.createPool(DBConfig);
/*连接数据库*/
let allSqlAction = (sql, value) => {
    return new Promise((resolve, reject) => {
        pool.getConnection(function (error, connection) {
            if (error) {
                console.log(error)
                reject(error)
            }
            else {
                console.log("数据库连接成功")
                connection.query(sql, value, (error, results) => {
                    if (error) reject(error)
                    else {
                        resolve(results)
                    }
                    connection.release()
                })
            }
        })
    })
};
module.exports = {
    allSqlAction
};