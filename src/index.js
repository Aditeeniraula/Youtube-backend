import { Mongoose } from "mongoose";
import { DB_NAME } from "./constants";

(async () => {
  try {
    await Mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    application.on("error", (error) => {
      console.log("ERR", error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`app is listening in ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("ERROR", error);
    throw err;
  }
})();
