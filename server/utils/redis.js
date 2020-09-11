// // redis set up
const redis = require('redis')

const { NODE_ENV } = process.env

const REDIS_PORT =
  NODE_ENV === 'production' ? { url: process.env.REDIS_URL } : 6379

const client = redis.createClient(REDIS_PORT)

module.exports = client
