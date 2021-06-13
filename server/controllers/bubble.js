import BubbleModal from "../models/user.js";

export const getBubbles = async (req, res) => {
  try {
    const bubbles = await Bubble.find();

    res.json(bubbles);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
};

export const create = async (req, res) => {
  const thisBubble = req.body;

  const newBubble = new Bubble({...thisBubble, createdAt: new Date().toISOString()});

  try {
    await newBubble.save();

    res.status(201).json(newBubble);
  } catch (error) {
    res.status(409).json({message: error.message});
  }
};
