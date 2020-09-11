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
            'Client-ID': 'kimne78kx3ncx6brgo4mv6wki5h1ko',
            Accept: 'application/vnd.twitchtv.v5+json',
          },
        }
      )

      const { _total } = response.data
      if (_total > 0) {
        const [channel] = response.data.channels
        client.setex(channelName, 300, JSON.stringify(channel))
        res.status(200).send(channel)
      } else
        res.status(200).send({
          message: `Channel with the name "${channelName}" doesn't exist`,
        })
    } catch (err) {
      res.status(500).send(err)
    }
  },
}
