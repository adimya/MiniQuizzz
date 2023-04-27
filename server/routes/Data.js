import express from "express";
import Data from "../models/data.js";
import Question from "../models/questions.js";
const router = express.Router();
router.get("/", async (req, res) => {
  try {
    const data = await Data.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/ques/:name", async (req, res) => {
  const {name} = req.params;

  try {
    const data = await Question.find({ dataTitle: name });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.post("/newdata", async (req, res) => {
  const newData = new Data(req.body);
  try {
    const saveData = await newData.save();
    res.status(200).json(saveData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/newQues", async (req, res) => {
  const newQuestion = new Question(req.body);
  try {
    const saveQuestion = await newQuestion.save();
    res.status(200).json(saveQuestion);
  } catch (err) {
    res.status(500).json(err);
  }
});
export default router;
