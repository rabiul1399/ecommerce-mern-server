const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();



// Midelware

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));





app.get("/api/user", (req, res) => {
    console.log(req.body.id)
    res.status(200).send({
        message: 'User go to api calling'
    })
})

app.get("/test", (req, res) => {
    res.status(200).send({
        message: 'Api is working fine and she is a beautfyll'
    })
})

app.post("/test", (req, res) => {
    res.status(200).send({
        message: 'Post Api is working fine and she is a beautfyll'
    })
})

app.put("/test", (req, res) => {
    res.status(200).send({
        message: 'PUt Api is working fine and she is a beautfyll'
    })
})
 
app.delete("/test", (req, res) => {
    res.status(200).send({
        message: 'Delet Api is working fine and she is a beautfyll'
    })
})

// client error handling 
app.use((req, res, next ) =>{
    res.status(404).json({message: 'route not found'})
})

// server error handling
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Somethin is broke!')
})

module.exports = app;