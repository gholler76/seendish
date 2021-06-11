import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true},
  firstName: {type: String},
  lastName: {type: String},
  birthdate: {type: Date},
  profilePicUrl: {type: String},
  createdAt: {
    type: Date,
    default: new Date(),
  },
  blurb: {type: String},
  profileMetrics: {
    "dishCount": Number,
    "dishedInCount": Number,
    "followerCount": Number,
    "followingCount": Number,
  },
  relationships: {
    followers: [String],
    following: [String],
  },
  id: {type: String},
});

export default mongoose.model("User", userSchema);