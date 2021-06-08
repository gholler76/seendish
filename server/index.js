import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.use(express.json({limit: "5mb", extended: true}));
app.use(express.urlencoded({limit: "5mb", extended: true}));
app.use(cors());

const PORT = process.env.PORT;

mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
  .catch((err) => console.log(err));

mongoose.set('useFindAndModify', false);