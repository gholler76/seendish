import mongoose from 'mongoose';

const dishSchema = mongoose.Schema({
  content: String,
  creator: String,
  likes: {type: [String], default: []},
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

var Dish = mongoose.model('Dish', dishSchema);

export default Dish;