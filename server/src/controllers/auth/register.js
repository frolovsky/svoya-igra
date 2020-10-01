const User = require('../../models/User')
const cm = require('../../utility/user/cookie-manager')


module.exports = async (req, res) => {
	if (req.cookies['auth-user-payload']) {
		throw new Error('Already logged')
	}
	try {
		const cookieHash = await cm.genCookie(req.body.email)
		const count = await User.find().countDocuments() + 1

		await User.create({
			email: req.body.email,
			password: req.body.password,
			username: `user${1000 + count + Math.floor(Math.random() * 1000)}`,
			cookie: cookieHash,
		})
		
		cm.setCookie(res, 'auth-user-payload', cookieHash)

		res.sendStatus(200)
	} catch (e) {
		let error = 'Возникла неизвестная ошибка при регистрации';
		if (e.code === 11000) {
			error = `Пользователь с почтой ${e.keyValue.email} уже существует`;
		}
		res.sendStatus(500).send({
			error
		})
	}

}