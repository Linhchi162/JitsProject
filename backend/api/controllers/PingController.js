module.exports = {
  ping: function (req, res) {
    return res.json({ message: 'pong' });
  }
};
