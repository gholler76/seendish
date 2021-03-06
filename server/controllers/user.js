import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import UserModal from "../models/user.js";

const secret = 'test';

export const login = async (req, res) => {
  const {email, password} = req.body;

  try {
    const oldUser = await UserModal.findOne({email});

    if (!oldUser) return res.status(404).json({message: "User not found"});

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    if (!isPasswordCorrect) return res.status(400).json({message: "Password is incorrect"});

    const token = jwt.sign({email: oldUser.email, id: oldUser._id}, secret, {expiresIn: "1h"});

    res.status(200).json({result: oldUser, token});
  } catch (err) {
    res.status(500).json({message: "Something went wrong"});
  }
};

export const register = async (req, res) => {
  const {email, password, firstName, lastName, username} = req.body;

  try {
    const oldUser = await UserModal.findOne({email});

    if (oldUser) return res.status(400).json({message: "User already exists"});

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await UserModal.create({email, username, password: hashedPassword, name: `${firstName} ${lastName}`});

    const token = jwt.sign({email: result.email, id: result._id}, secret, {expiresIn: "1h"});

    res.status(201).json({result, token});
  } catch (error) {
    res.status(500).json({message: "Something went wrong"});

    console.log(error);
  }
};
