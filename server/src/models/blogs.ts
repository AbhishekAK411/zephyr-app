import mongoose, { Schema, Document, ObjectId } from "mongoose";

interface IBlog extends Document {
  title: string;
  shortDescription: string;
  description: string;
  upvotes: number;
  downvotes: number;
  comments: string[];
  user: ObjectId;
}

const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  shortDescription: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  upvotes: {
    type: Number,
    default: 0,
  },
  downvotes: {
    type: Number,
    default: 0
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
