//zod-> basically ek check lga deta haa ki ye itna hi according data le sakta haa as a input
const express = require("express")
const app = express();
const zod = require("zod")

app.use(express.json()) 

const schema  = zod.array(zod.number())

app.post('/', function (req,res) {
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys)

    res.send({
        response
    })
})
app.listen(3000)