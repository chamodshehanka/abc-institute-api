import * as mongoose from "mongoose";

export interface IRooms extends mongoose.Document {
  _id: mongoose.Schema.Types.ObjectId;
  name: string;
  building: string;
  roomType: string;
}
