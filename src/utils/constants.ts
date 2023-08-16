import dotenv from "dotenv"
dotenv.config({
    path:"src/config/config.env"
})
export const MONGO_URI=process.env.MONGO_URI_DEV||process.env.MONGO_URI_PROD;
export const ENV_PORT:string|number=process.env.PORT||8000
export const MODE=process.env.NODE_ENV
export const JWT_SECRET=process.env.JWT_SECRET as string
export const SALT_ROUNDS:number=10;