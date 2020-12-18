const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();

 const userRouter= require("./api/users/user.router");
 app.use(express.json());
 app.use("/api/users", userRouter);

app.listen(process.env.App_PORT, () => {
    console.log("server is listening on port ", process.env.App_PORT);
});