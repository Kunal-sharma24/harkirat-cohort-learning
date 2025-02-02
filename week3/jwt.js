const jwt = require('jsonwebtoken');
const express = require('express');
const jwtpassword = "123456";

const app = express();

const ALL_USERS = [
    {
        username: "kunal",
        password: "123",
        name: "Kunal Sharma"
    },
    {
        username: "shimla",
        password: "123456",
        name: "Shimla Sharma"
    },
    {
        username: "dimple",
        password: "123456",
        name: "Dimple Sharma"
    }
];

function userexists(username, password) {
    let userexists = false;
    const user = username;
    const pass = password;
    for (let i = 0; i < ALL_USERS.length; i++) {
        if (ALL_USERS[i].username === user && ALL_USERS[i].password === pass) {
            userexists = true;
        }
    }
    return userexists
}

app.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    if (!userexists(username, password)) {
        return res.status(401).json({
            "message": "Invalid username or password"
        });
    }

    var token = jwt.sign({ username: username }, jwtpassword);
    return res.json({
        token,
    });
});

app.get("/users", function (req, res) {
    const token = req.headers.authorization;
    try {
        const decoded = jwt.verify(token, jwtpassword);
        const username = decoded.username;
        res.json({
            "message": `Welcome, ${username}`
        });
    } catch (err) {
        return res.status(401).json({
            "message": "Invalid token"
        });
    }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
