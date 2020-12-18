const { getUserByUsername } = require("./user.service");
const { compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");
const { json } = require("express");

module.exports = {
    login: (req, res) => {
        const body = req.body;
        getUserByUsername(body.username, (err, results) => {
            if (err) {
                console.log(err);
            }
            if (!results) {
                return res.json({
                    success: 0,
                    data: "invalid username or password"
                });
            }
            var results = compareSync(body.password, results.password);
            if (results) {
                results.password = undefined;
                const jsonwebtoken = sign({ results: results }, "qwe1234", {
                    expiresIn: "1h"
                });
                return res.json({
                    success: 1,
                    message: "Login successfully",
                    token: jsontoken
                });
            } else {
                return res.json({
                    success: 0,
                    data: "Invalid username or password"
                });
            }
        });
    }
};