import * as mongoose from "mongoose";

export interface IOSession extends mongoose.Document {
  _id: mongoose.Schema.Types.ObjectId;
  osessions: string[];
}
