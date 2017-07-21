const router = require('express').Router()

router.get('/', (req, res, next) => {
  res.render('home')
})

router.get('/description', (req, res, next) => {
  res.render('description')
})

router.get('/projects', (req, res, next) => {
  res.render('projects')
})

module.exports = { router }
