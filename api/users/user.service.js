const pool = require("../../config/db");

module.exports = {
    getUserByUsername: (username, callBack) => {
        pool.query(`select id,name,email,role from users where email = ? and password = ?`,
            [username], (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        )
    },
};