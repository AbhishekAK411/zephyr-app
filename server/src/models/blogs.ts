import mongoose, { Schema, Document } from "mongoose";

interface IBlog extends Document {
  title: string;
  upvotes: number;
  downvotes: number;
  comments: Array<String>;
  user: string;
}

const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  upvotes: {
    type: Number,
  },
  downvotes: {
    type: Number,
  },
  comments: {
    type: [String],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

export default mongoose.model<IBlog>("Blog", blogSchema);
