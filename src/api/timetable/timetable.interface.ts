import * as mongoose from "mongoose";

export interface ITimetable extends mongoose.Document {
  _id: mongoose.Schema.Types.ObjectId;
  name: string;
}
