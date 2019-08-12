//require('./newrelic')
const express = require('express')
const app = express()
const port = process.argv[2] || 3000

app.use(express.static('build'))
app.listen(port, () => console.log(`React Bootstrap Theme is listening on port ${port}!`))