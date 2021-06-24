import express from 'express';
import mongoose from 'mongoose';
import Bubble from "../models/bubble.js";

const router = express.Router();

export const getAllBubbles = async (req, res) => {
  try {
    const bubbles = await Bubble.find();

    res.json({data: bubbles});
  } catch (error) {
    res.status(404).json({message: error.message});
  }
};

export const createBubble = async (req, res) => {
  const bubble = req.body;

  const newBubble = new Bubble({...bubble, createdAt: new Date().toISOString()});

  try {
    await newBubble.save();

    res.status(201).json(newBubble);
  } catch (error) {
    res.status(409).json({message: error.message});
  }
};


export default router;