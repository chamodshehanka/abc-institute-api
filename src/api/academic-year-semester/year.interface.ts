import * as mongoose from "mongoose";

export interface IYear extends mongoose.Document {
  _id: mongoose.Schema.Types.ObjectId;
  year: string;
  semester: string;
}
