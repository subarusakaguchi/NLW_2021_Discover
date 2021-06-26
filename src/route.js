const express = require('express')
const questionController = require('./controllers/QuestionController')
const roomController = require('./controllers/RoomControllers')

const route = express.Router()

route.get('/', (req, res) => res.render('index', {page: 'enterRoom'}))
route.get('/createPass', (req, res) => res.render('index', {page: 'createPass'}))
route.get('/room/:room', (req, res) => res.render('room'))

// Formato que o formulário deve passar a informação
route.post('/question/:room/:question/:action', questionController.index)
route.post('/createRoom', roomController.create)


module.exports = route