const express=require("express");
const dotenv=require("dotenv");
const app=express();
dotenv.config();
const port=3000;


app.get("/api", (req,res) => {
    res.json({
        success: 1,
        message: "Rest api is working"
    });
});

app.listen(port, () => console.log(`server is listening on port ${port}!`));