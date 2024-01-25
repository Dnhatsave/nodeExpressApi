
const crypto = require('crypto');
const constants = require('constants');

function getBearerToken(mpesa_public_key, mpesa_api_key) {
    const publicKey = "-----BEGIN PUBLIC KEY-----\n"+mpesa_public_key+"\n"+"-----END PUBLIC KEY-----";
    const buffer = Buffer.from(mpesa_api_key);
    const encrypted = crypto.publicEncrypt({
        'key': publicKey,
        'padding': constants.RSA_PKCS1_PADDING,
    }, buffer);
    return encrypted.toString("base64");
}

module.exports = getBearerToken;