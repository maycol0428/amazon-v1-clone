import mongoose, { Schema } from "mongoose";
const schema = new Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
    minLength: [8, "Name should be greater than 8 characters"],
  },
});

export default mongoose.model("User", schema);
