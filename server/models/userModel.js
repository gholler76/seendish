import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  id: {type: String},
  username: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true},
  firstName: {type: String},
  lastName: {type: String},
  birthdate: {type: Date},
  profilePic: {type: String}
});

export default mongoose.model("User", userSchema);