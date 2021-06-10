import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  id: {type: String},
  username: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true},
  firstName: {type: String, required: true},
  lastName: {type: String}, required: true,
  birthdate: {type: Date, required: true},
  profilePic: {type: String}
});

export default mongoose.model("User", userSchema);