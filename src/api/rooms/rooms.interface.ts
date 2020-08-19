import * as mongoose from "mongoose";

export interface IRooms extends mongoose.Document {
  _id: mongoose.Schema.Types.ObjectId;
  building: string;
  rooms: string;
}
