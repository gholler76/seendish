import express from "express";
import {createBubble, getAllBubbles} from "../controllers/bubble.js";

const router = express.Router();


router.get("/", getBubbles);
router.post("/", create);

export default router;;