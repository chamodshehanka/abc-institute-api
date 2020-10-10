import * as mongoose from "mongoose";

export interface ISubjectsWithTags extends mongoose.Document {
  _id: mongoose.Schema.Types.ObjectId;
  tag: string;
  subject: string;
  rooms: string[];
}
