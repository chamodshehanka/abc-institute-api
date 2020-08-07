import * as mongoose from "mongoose";

export interface IWorkingDays extends mongoose.Document {
  _id: mongoose.Schema.Types.ObjectId;
  name: string;
}
