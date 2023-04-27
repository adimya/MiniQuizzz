import mongoose from "mongoose";
const QuestionSchema = new mongoose.Schema({
  statement: {
    type: String,
    required: true,
  },
  option1: {
    type: String,
    required: true,
  },
  option2: {
    type: String,
    required: true,
  },
  option3: {
    type: String,
    required: true,
  },
  option4: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  dataTitle:{
    type:String,
    required:true,
  }
});

export default mongoose.model("Question", QuestionSchema);