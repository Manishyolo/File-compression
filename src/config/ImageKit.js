import ImageKit from '@imagekit/nodejs';
import dotenv from "dotenv";
dotenv.config();  

export const imageKit = new ImageKit({
      publicKey:process.env.IMAGEKIT_PUBLICKEY,
     privateKey:process.env.IMAGEKIT_PASSWORD,
     urlEndpoint:process.env.IMAGEKIT_URL_ENDPOINT

})

