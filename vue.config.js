const PORT = process.env.PORT || 9000

module.exports = {
  devServer: {
    proxy: `http://localhost:${PORT}`,
  },
}
