import * as mongoose from "mongoose";

export interface IGroup extends mongoose.Document {
  _id: mongoose.Schema.Types.ObjectId;
  number: string;
  rooms: string[];
}
