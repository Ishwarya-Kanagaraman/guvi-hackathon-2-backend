import mongoose from "mongoose";

const theaterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: false,
  },
});

// model first argument is sigular
// and in MongoDB the collection will be plural
// Collection name - "User"
export const Theaters = mongoose.model("Theater", theaterSchema);