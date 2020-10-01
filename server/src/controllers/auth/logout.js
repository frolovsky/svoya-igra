module.exports = (req, res) => {
  if (!req.cookies['auth-user-payload']) {
    throw new Error('Already exited')
	}
  res.cookie('auth-user-payload', 'unset', {
    maxAge: 0
  })
  res.sendStatus(200)
}