import mongoose from 'mongoose';

const bubbleSchema = mongoose.Schema({
  title: String,
  pic: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
  popdate: Date,
  dishes: {type: [String], default: []},
  type: String,
},
);

var Bubble = mongoose.model('Bubble', bubbleSchema);

export default Bubble;