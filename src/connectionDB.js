import mongoose from "mongoose"
import logger from "./helpers/logger.helper.js"

export const connectDB = async(url)=>{
    try {
        await mongoose.connect(url)
        logger.INFO('Conexion exitosa a DB')
    } catch (error) {
         logger.ERROR(`Error al conectar a DB: ${error.message}`)
    }
}