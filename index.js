const express = require('express')
const path = require('path')

const app = express()
console.log(__dirname)
app.use(express.static('dist'))
app.use(express.static('node_modules'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
})

const port = process.env.PORT || 1227

app.listen(port)