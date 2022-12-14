// import modules

import express from 'express'

import { bands } from './data/band-data.js'

// Create Express app

const app = express()

// Configure the app (app.set)

app.set('view engine', 'ejs')

// Mount Middleware (app.use)



// Mount routes

app.get('/', function(req, res) {
  res.redirect('/bands')
})

app.get('/home', function(req, res) {
  res.render('home')
})

app.get('/bands', function(req, res) {
  res.render('bands/index', {
    bands: bands
  })
})

// Tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000')
})