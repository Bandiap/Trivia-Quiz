module.exports.home = (req, res) => {
  res.render('index')
}

module.exports.play = (req, res) => {
  res.render('play',{ data: req.body })
}

module.exports.end = (req, res) => {
  res.render('end')
}
