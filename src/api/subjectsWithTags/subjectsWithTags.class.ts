import * as mongoose from "mongoose";
import { ISubjectsWithTags } from "./subjectsWithTags.interface";

export const SubjectsWithTagsSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true },
  tag: { type: String, required: true },
  subject: { type: String, required: true },
  rooms: { type: [String], required: true },
});

const SubjectsWithTags = mongoose.model<ISubjectsWithTags>(
  "SubjectsWithTags",
  SubjectsWithTagsSchema
);
export default SubjectsWithTags;
