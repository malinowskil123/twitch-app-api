const axios = require('axios')
const { twitchApiPath } = require('../utils/config')
const client = require('../utils/cache')
const CLIENT_ID = process.env.CLIENT_ID

module.exports = {
  getChannel: async (req, res, next) => {
    const { channelName } = req.params
    try {
      const response = await axios.get(
        `${twitchApiPath}?query=${channelName}&limit=1`,
        {
          headers: {
            'Client-ID': CLIENT_ID,
            Accept: 'application/vnd.twitchtv.v5+json',
          },
        }
      )
      const [channel] = response.data.channels
      client.setex(channelName, 300, JSON.stringify(channel))
      res.status(200).send(channel)
    } catch (err) {
      res.status(500).send(err.message)
    }
  },
}