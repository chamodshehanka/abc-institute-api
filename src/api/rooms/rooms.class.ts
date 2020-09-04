import * as mongoose from "mongoose";
import { IRooms } from "./rooms.interface";

export const RoomsSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true },
  name: { type: String, required: true },
  roomType: { type: String, required: true },
  building: { type: String, required: true },
});

const Rooms = mongoose.model<IRooms>("Rooms", RoomsSchema);
export default Rooms;
