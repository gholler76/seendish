import mongoose from 'mongoose';

const bubbleSchema = mongoose.Schema({
  title: String,
  popdate: Date,
  type: String,
  picUrl: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
  dishes: {type: [String], default: []},
},
);

var Bubble = mongoose.model('Bubble', bubbleSchema);

export default Bubble;