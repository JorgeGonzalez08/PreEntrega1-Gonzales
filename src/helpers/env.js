import {config} from "dotenv";
import args from "./arguments.herlpers.js";

const {mode} = args

const path = `.env.${mode}`

config({path})

const env = {
    PORT: process.env.PORT,
    MONGO_URL: process.env.MONGO_URL,
    SECRET_WORD: process.env.SECRET_WORD,
    SECRET_COOKIE: process.env.SECRET_COOKIE
}

export default env