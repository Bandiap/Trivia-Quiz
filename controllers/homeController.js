module.exports.home = (req, res) => {
  res.render('index')
}

module.exports.game = (req, res) => {
  res.render('game')
}

module.exports.end = (req, res) => {
  res.render('end')
}

module.exports.play = (req, res) => {
  res.render('play',{ data: req.body })
}
