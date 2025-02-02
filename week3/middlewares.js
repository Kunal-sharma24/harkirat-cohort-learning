//example of middlewares in javascript
//middlewares defintion -> 

const express = require("express")
const app = express();

function checkUserDetails(req,res,next) {
    const username = req.headers.username
    const password = req.headers.password

    if(username != "kunal" || password != "pass"){
        res.status(400).json({"msg" : "username and password is incorrect"})
        return
    }
    next();
}

function checkkidney(req,res,next) {
    const kidney = req.query.kidney

    if(kidney != 1 && kidney != 2){
        res.status(200).json({"msg" : "kidney is not available"})
        return
    }
    next();
}

app.get("/kidney-check",checkUserDetails,checkkidney,function (req,res) {
    res.json({
        "msg" : "welcome to the doctor kabin"
    })
})

app.get("/liver-check",checkUserDetails,function (req,res) {
    res.json({
        "msg" : "welcome to the hospital theatre"
    })
})

app.listen(3000)