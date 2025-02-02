const express = require("express")

const app = express();

app.get("/",function (req,res) {
    //add some middlewares
    const username = req.headers.username
    const password = req.headers.password
    const kidney = req.query.kidney

    if(username != "kunal" && password != "pass"){
        res.status(400).json({"msg" : "username and password is incorrect"})
        return
    }
    if(kidney != 1 && kidney != 2){
        res.status(200).json({"msg" : "kidney is not available"})
        return
    }
    res.json({
        "msg" : "Welcome to the doctor kabin"
    })
})

app.listen(3000)