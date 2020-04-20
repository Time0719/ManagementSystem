const mysql = require('mysql');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '123',
    database: 'webapp'
});

class Mysql {
    constructor() {

    }
    query() {
        return new Promise((resolve, reject) => {
            pool.query('SELECT * from user', function (error, results, fields) {
                if (error) {
                    throw error
                };
                resolve(results)
                // console.log('The solution is: ', results[0].solution);
            });
        })

    }
}

module.exports = new Mysql()
