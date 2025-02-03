const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

mongoose.connect("mongodb+srv://kunal_sample_db:kunal90@cluster0.fwge6.mongodb.net/user_app")

const User = mongoose.model("users", { username: String, password: String, name: String });

app.post('/signin', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    const usernameexist = await User.findOne({ username: username });
    if (usernameexist) {
        return res.status(401).json({
            "mes": "Username already exists"
        });
    }

    const user = new User({
        username: username,
        password: password,
        name: name
    });

    try {
        await user.save();
        res.json({
            "mes": "User created successfully"
        });
    } catch (err) {
        res.status(500).json({
            "mes": "Error creating user"
        });
    }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});