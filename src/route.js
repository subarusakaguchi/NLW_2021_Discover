const { Router } = require('express')
const express = require('express')
const questionController = require('./controllers/QuestionController')
const roomController = require('./controllers/RoomControllers')

const route = express.Router()

route.get('/', (req, res) => res.render('index', {page: 'enterRoom'}))
route.get('/createPass', (req, res) => res.render('index', {page: 'createPass'}))

route.get('/room/:room', roomController.open)
route.post('/createRoom', roomController.create)
route.post('/enterRoom', roomController.enter)

route.post('/question/create/:room', questionController.create)
route.post('/question/:room/:question/:action', questionController.index)

module.exports = route