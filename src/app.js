const express = require('express')
const routes = require('./routes/index')

const app = express()

app.use(express.json())
app.use('/personal-project', routes)

app.listen(3000, () => {
    console.log('Service started on port 3000')
})