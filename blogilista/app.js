const cors = require('cors')
const mongoose = require('mongoose')
const logger = require('./utils/logger')
const config = require('./utils/config')
const express = require('express')
const app = express()
const blogsRouter = require('./controllers/blogs')
const usersRouter = require('./controllers/users')
const middleware = require('./utils/middleware')
mongoose.set('useFindAndModify', false)



logger.info('connecting to', config.mongoUrl)

mongoose.connect(config.mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true})
.then(result => {
    logger.info('connected to MongoDB')
  })
  .catch((error) => {
    logger.error('error connecting to MongoDB:', error.message)
  })
  
app.use(cors())
app.use(express.json())
app.use(express.static('build'))
app.use('/api/blogs', blogsRouter)
app.use('/api/users', usersRouter)
app.use(middleware.errorHandler)


module.exports = app