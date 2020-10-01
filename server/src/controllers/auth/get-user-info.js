const User = require('../../models/User')

module.exports = async (req, res) => {
  if (!req.cookies['auth-user-payload']) {
    throw new Error('Unauthorized')
  }
  console.log(req.cookies['auth-user-payload'])
  try {
    const user = await User.findOne({ cookie: req.cookies['auth-user-payload'] }, 'username email')
    res.send({
      user
    })
  } catch(e) {
    throw new Error(e.message)
  }
  

}