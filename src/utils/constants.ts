import dotenv from "dotenv"
dotenv.config({
    path:"src/config/config.env"
})
export const MONGO_URI:string=process.env.MONGO_URI_DEV||process.env.MONGO_URI_PROD;
export const ENV_PORT:string|number=process.env.PORT||8000
export const MODE:string=process.env.NODE_ENV
export const JWT_SECRET:string=process.env.JWT_SECRET
export const SALT_ROUNDS:number=10;