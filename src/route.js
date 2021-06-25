const express = require('express')
const questionController = require('./controllers/QuestionController')

const route = express.Router()

route.get('/', (req, res) => res.render('index'))
route.get('/room', (req, res) => res.render('room'))
route.get('/createPass', (req, res) => res.render('createPass'))

// Formato que o formulário deve passar a informação
route.post('/room/:room/:question/:action', questionController.index)


module.exports = route