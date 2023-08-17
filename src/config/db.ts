import { connect, ConnectOptions } from "mongoose";
import { MONGO_URI } from "../utils/constants";
export const connectDB = async (): Promise<void> => {
  try {
    const conn = await connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);
    console.log(`🙃🙃 Mogbo DB is connected ${conn.connection.host} 🙃🙃`);
  } catch (error) {
    console.log(`🏮🏮🏮 ${error} 🏮🏮🏮`);
  }
};
