import {protect} from "../middlewares/authMiddleware"
import { JWT_SECRET,SALT_ROUNDS } from "../utils/constants";

import userRouter from "./user/user.routes"
import urlRouter from "./url/url.routes"



export  {protect,JWT_SECRET,SALT_ROUNDS,        userRouter,urlRouter};