import express from "express";
import {createBubble, getAllBubbles} from "../controllers/bubble.js";

const router = express.Router();


router.get('/', getAllBubbles);
router.post('/', createBubble);

export default router;