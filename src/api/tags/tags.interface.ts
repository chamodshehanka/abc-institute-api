import * as mongoose from "mongoose";

export interface ITags extends mongoose.Document {
  _id: mongoose.Schema.Types.ObjectId;
  name: string;
}
