const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('./config/config')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');

mongoose.Promise = global.Promise;

const app = express()
app.use(morgan('dev'))
app.use(cors({
    credentials: true,
    origin: ['http://localhost:8080']
}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser())

mongoose.connect(config.dbURL, config.dbOptions)
mongoose.connection
    .once('open', () => {
        console.log('Mongoose - successful conenction...')
        app.listen(process.env.PORT || config.port, 
            () => console.log(`Server start on port ${config.port} ...`))
    })
    .on('error', error => console.warn(error))

const registerController = require('./controllers/auth/register')
const loginController = require('./controllers/auth/login')
const logoutController = require('./controllers/auth/logout')
const getUserInfoController = require('./controllers/auth/get-user-info')

app.post('/users/register', registerController)
app.post('/users/login', loginController) 
app.post('/users/logout', logoutController)
app.post('/users/me', getUserInfoController)
