import mongoose from "mongoose";

const DataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required:true,
  },
  url: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Data", DataSchema);
