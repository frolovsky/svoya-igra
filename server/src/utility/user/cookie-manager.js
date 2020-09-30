const bcrypt = require('bcrypt');

class CookieManager {
    async genCookie(plainText) {
        const hash = await bcrypt.hash(plainText, 10)
        return hash;
    }
    setCookie(res, name, value, options) {
        return res.cookie(name, value, options)
    }
}

module.exports = new CookieManager();
