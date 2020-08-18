import * as mongoose from "mongoose";
import { ILocations } from "./locations.interface";

export const LocationSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true },
  building: { type: String, required: true },
  rooms: { type: String, required: true },
  
});

const Locations = mongoose.model<ILocations>("Locations", LocationSchema);
export default Locations;
