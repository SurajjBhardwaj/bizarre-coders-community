import mongoose from "mongoose";

const { Schema } = mongoose;

const registrationSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNo: {
      type: Number,
      required: true,
    },
    rollNo: {
      type: Number,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    branch: {
      type: String,
      required: true,
    },
    anyDoubt: {
      type: String,
      required: false,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

mongoose.models = {};
const Registration = mongoose.model("Registration", registrationSchema);
export default Registration;
