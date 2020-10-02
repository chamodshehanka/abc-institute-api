import * as mongoose from "mongoose";

export interface ICSession extends mongoose.Document {
  _id: mongoose.Schema.Types.ObjectId;
  csessions: string[];
}
