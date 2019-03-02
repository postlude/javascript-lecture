const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const productsRouter = require('./routers/products')
const ordersRouter = require('./routers/orders')
const categoriesRouter = require('./routers/categories')
const authRouter = require('./routers/auth')

const auth = require('./auth')
require('./db').init()

const app = express()

const myLogger = (req, res, next) => {
  console.log(`Someone reqeusts to ${req.url}`)
  next()
}

app.set('view engine', 'ejs')  // 사용할 템플릿 엔진
app.set('views', path.resolve(`${__dirname}/views`)) // 렌더링할 파일 경로

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cors())

app.use(myLogger)
app.use(auth.init())

app.use('/orders', ordersRouter)
app.use('/products', productsRouter)
app.use('/categories', categoriesRouter)
app.use('/auth', authRouter)

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/login', (req, res) => {
  res.render('auth/login')
})

app.get('/signup', (req, res) => {
  res.render('auth/signup')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
