//global catches -> error handling middleware


const express = require("express")
const app = express();

app.use(express.json())

app.post('/', function (req,res) {
    const kidneys = req.body.kidneys;
    const kindeyvalues = kidneys.length;

    res.send("your kidneys are " + kindeyvalues)
})

app.use( function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.listen(3000)