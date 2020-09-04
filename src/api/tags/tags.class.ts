import * as mongoose from "mongoose";
import { ITags } from "./tags.interface";

export const TagsSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true },
  name: { type: String, required: true },
});

const Tags = mongoose.model<ITags>("Tags", TagsSchema);
export default Tags;
