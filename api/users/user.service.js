const pool = require("../../config/db");

module.exports = {
    getUserByUsername: (username, callBack) => {
        pool.query(`select * from users where user_name = ?`,
            [username], (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        )
    },
};