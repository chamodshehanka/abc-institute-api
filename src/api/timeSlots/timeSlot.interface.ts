import * as mongoose from "mongoose";

export interface ITimeslot extends mongoose.Document {
  _id: mongoose.Schema.Types.ObjectId;
  startTime: string;
  endTime: string;
  day: string;
}
