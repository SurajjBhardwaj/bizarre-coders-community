import mongoose from "mongoose";

// import dotenv from "dotenv";
// dotenv.config();

const mongoURI = "mongodb+srv://skn8454:saka123@cluster0.8snhuzo.mongodb.net/";

const connect = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log("✅ Database Connected");
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
  }
};

export default connect;
