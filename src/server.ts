import express, { Express, Response, json } from "express";
import cors from "cors";

import { connectDB } from "./config/db";
import allRoutes from "./routes";
import errorHandler from "./middlewares/errorHandler";
import { ENV_PORT, MODE } from "./utils/constants";
import cookieParser from "cookie-parser";

// import dotenv from "dotenv";
// dotenv.config({
//   path: "src/config/config.env",
// });

connectDB();
export const app: Express = express();
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true,
}));
app.use(cookieParser())
app.use(json());

// if (process.env.NODE_ENV !== "production") {
//     app.use(httpLogger);
//   }
app.get("/", (_, res: Response) => {
  res.send("pickle rick");
});
app.use("/hyper-ninja/v1", allRoutes);
app.use(errorHandler);

const server = app.listen(ENV_PORT, () =>
  console.log(
    `⭐⭐server is running in ${MODE} Mode, & made on port ${ENV_PORT} ⭐⭐`
  )
);

process.on("unhandledRejection", (err: Error | null) => {
  console.log(`😡😡 Error: ${err.message} 😡😡`);
  server.close(() => process.exit(1));
});
