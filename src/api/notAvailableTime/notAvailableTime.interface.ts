import * as mongoose from "mongoose";

export interface INotAvailableTime extends mongoose.Document {
  _id: mongoose.Schema.Types.ObjectId;
  type: string;
  typeId: string;
  name: string;
  day: string;
  stime: string;
  ltime: string;
}
