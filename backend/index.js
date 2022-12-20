const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


const mainRouter = require('./routes/main')

app.use(mainRouter.router)

app.listen(3000, function () {
    console.log('Example app listening on port 3000')
})