// env config
require('dotenv').config({})
// imports
const express = require('express')
const { getChannel } = require('./controllers/controllers')
const { checkCache } = require('./middleware/middleware')
// ports
const PORT = process.env.PORT || 9000
// app vars
const app = express()

// endpoints
app.get('/api/channel/:channelName', checkCache, getChannel)

app.listen(PORT, () => console.log(`app running on port: ${PORT}`))
