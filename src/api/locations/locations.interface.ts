import * as mongoose from "mongoose";

export interface ILocations extends mongoose.Document {
  _id: mongoose.Schema.Types.ObjectId;
  building: string;
  rooms: string;
}
