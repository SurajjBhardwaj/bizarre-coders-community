import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

// console.log(process.env.MONGO_URI);

const mongoURI =
  process.env.MONGO_URI || "mongodb://localhost:27017/registration";

const connect = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(mongoURI, { useNewUrlParser: true });
      console.log("✅ Database Connected");
    } else {
      console.log("Database already connected");
    }
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
  }
};

export default connect;
