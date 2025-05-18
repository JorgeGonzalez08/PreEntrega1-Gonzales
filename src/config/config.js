import dotenv from 'dotenv'

dotenv.config();

export default{
    port: process.env.PORT,
    mongoUrl: process.env.MONGO_URL,
    secretWord: process.env.SECRET_WORD,
    secretCookie: process.env.SECRET_COOKIE
}