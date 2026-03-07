const Imagekit = require("@imagekit/nodejs");
const {toFile} = require('@imagekit/nodejs')
const dotenv = require('dotenv')

dotenv.config();


const imagekit = new Imagekit({
      publicKey:process.env.IMAGEKIT_PUBLICKEY,
     privateKey:process.env.IMAGEKIT_PASSWORD,
     urlEndpoint:process.env.IMAGEKIT_URL_ENDPOINT

})

module.exports = {imagekit,toFile};