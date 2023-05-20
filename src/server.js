const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const createError = require('http-errors');
var xssClean = require('xss-clean')
const rateLimit = require('express-rate-limit')

const app = express();

const port = 3001
const rateLimiter = rateLimit({
    windowMs: 1* 60 * 1000 , // 1 minute,
    mx: 5,
    message: 'Too many request from this IP. please try again'
})
// Midelware
app.use(rateLimit());
app.use(xssClean());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));





app.get("/api/user", (req, res) => {
    console.log(req.body.id)
    res.status(200).send({
        message: 'User go to api calling'
    })
})

app.get("/test",rateLimiter, (req, res) => {
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
app.use((req, res, next) => {
    next(createError(404, 'Route not found'));
})

// server error handling = all the erros 
app.use((err, req, res, next) => {
    return res.status(err.status || 500).json({
        success: false,
        message: err.message,
    });

});


app.listen(port, () => {
    console.log(`server is runnig at http://localhost:${port}`)
});

