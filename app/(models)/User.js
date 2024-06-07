import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const userschema = new Schema(
  {
    name: String,
    email: String,
    password: String,
  },
  {
    timeseries: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", userschema);
export default User;
