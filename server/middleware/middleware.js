const client = require('../utils/redis')

module.exports = {
  checkCache: (req, res, next) => {
    const { channelName } = req.params
    client.get(channelName, (err, data) => {
      if (err) res.status(500).send(err.message)
      if (data !== null) res.status(200).send(JSON.parse(data))
      else next()
    })
  },
}
