import * as mongoose from "mongoose";

export interface ISubGroup extends mongoose.Document {
  _id: mongoose.Schema.Types.ObjectId;
  number: string;
}
