const User = require('../../models/User')
const bcrypt = require('bcrypt')
const cm = require('../../utility/user/cookie-manager')

const regExpEmail = /\S+@\S+\.\S+/;

userByEmail = async function(email, remember) {
    if (!remember) return await User.findOne({ email })
    return await User.findOneAndUpdate({ email }, {
        $set: {
            cookie: await cm.genCookie(email + Math.random())
        }
    })
}
userByUsername = async function(username, remember) {
    if (!remember) return await User.findOne({ username })
    return await User.findOneAndUpdate({ username }, {
        cookie: await cm.genCookie(username + Math.random())
    })
}
module.exports = async (req, res) => {
    if (req.cookies['auth-user-payload']) {
        throw new Error('Already logged')
    }
    try {
        const { identify, password, remember } = req.body;
        const user = regExpEmail.test(identify) ? await userByEmail(identify, remember) : await userByUsername(identify, remember);
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
                res.send('Авторизация успешная')
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