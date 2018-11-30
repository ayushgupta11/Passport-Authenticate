const express = require('express')
const app = express()
const router = require('./router/router')
const passportConfig = require('./config/passportConfig')

app.use('/api', router)

app.listen(3000, (err) => {
    if(err) throw err;
    console.log("Server running at port 3000")
})