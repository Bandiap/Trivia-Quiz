const path = require('path')
const indexRouter = require('./routes/index')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = process.env.PORT || 5000
// Set views
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
// Set public directory
app.use(express.static(path.join(__dirname,'public')))
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
// Set Router
app.use('/', indexRouter)

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
});