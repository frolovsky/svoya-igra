const request = require('request')
const config = require('../../config/config')

request(config.dbURL, function(error, response, body) {
    console.error('error:', error);
    console.log('response:', response);
    console.log('body:', body)
})