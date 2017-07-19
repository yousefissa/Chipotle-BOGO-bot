const request = require('request');

// modify with your info
var userInfo = {
    'firstName': 'Your First Name',
    'lastName': 'Your Last Name',
    'phoneNumber': 'Your Cell Number, add the +1 before it and no dashes between.',
    'optedIn': false,
    'zip': 'Your Zip Code'
}

// promo url, may be able to change in the future
const promoUrl = 'https://savorwavs.com/api/offer/request'

// headers, again, you may be able to change this in the future
const headers = {
    'Accept': 'application/json',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'en-US,en;q=0.8',
    'Connection': 'keep-alive',
    'Content-Type': 'application/json',
    'Host': 'savorwavs.com',
    'Origin': 'https://savorwavs.com',
    'Referer': 'https://savorwavs.com/buy-one-get-one',
    'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/55.0.2883.87 Chrome/55.0.2883.87 Safari/537.36'
};

// get your coupon, ayee
request({
    url: promoUrl,
    method: 'POST',
    json: true,
    body: userInfo
}, function (error, response, body) {
    console.log(response['body']);
});

