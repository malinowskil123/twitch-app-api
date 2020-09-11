// env config
require('dotenv').config({})
// imports
const express = require('express'),
  app = express()

const client = require('./utils/redis')

const session = require('express-session'),
  RedisStore = require('connect-redis')(session)

const { getChannel } = require('./controllers/controllers')
const { checkCache } = require('./middleware/middleware')

const PORT = process.env.PORT || 9000

app.use(
  session({
    store: new RedisStore({ client }),
    secret: 'anycrazystringblahblah',
    resave: true,
    saveUninitialized: true,
    cookie: {
      maxAge: 300,
    },
  })
)

// serve up front-end build
app.use(express.static(`${__dirname}/../dist`))
// endpoints
app.get('/api/channel/:channelName', checkCache, getChannel)

app.listen(PORT, () => console.log(`app running on port: ${PORT}`))
