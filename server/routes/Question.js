import express from "express";
import Question from "../models/questions.js";
const router = express.Router();
router.get("/ques", async (req, res) => {
    try {
      const data = await Question.find();
      res.status(200).json(data);
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
