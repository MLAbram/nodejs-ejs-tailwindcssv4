const express = require('express'), app = express()
const ejs = require('./routes/ejs')

app.set('views', __dirname + 'views')
app.set('view engine', 'ejs')

app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use('/', ejs)

app.listen(3000, () => {})