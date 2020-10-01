const User = require('../../models/User')
const bcrypt = require('bcrypt')
const cm = require('../../utility/user/cookie-manager')

const regExpEmail = /\S+@\S+\.\S+/;

userByEmail = async function(email) {
    return await User.findOne({ email })
}
userByUsername = async function(username) {
    return await User.findOne({ username })
}
module.exports = async (req, res) => {
    if (req.cookies['auth-user-payload']) {
        throw new Error('Already logged')
    }
    try {
        const { identify, password, remember } = req.body;
        const user = regExpEmail.test(identify) ? await userByEmail(identify) : await userByUsername(identify);
        if (user) {
            const same = await bcrypt.compare(password, user.password);
            if (same) {
                if (remember) {
                    cm.setCookie(res, 'auth-user-payload', user.cookie, {
                        maxAge: 1000 * 3600
                    })
                } else {
                    cm.setCookie(res, 'auth-user-payload', user.cookie)
                }
                res.send({
                    user: {
                        email: user.email,
                        username: user.username,
                        _id: user._id
                    }
                })
            } else {
                res.send('Неверный пароль')
            }
        }
    } catch (e) {
        res.sendStatus(404).send({
            message: 'Ошибка',
            error: e
        })
    }
}