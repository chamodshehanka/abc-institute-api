import * as mongoose from "mongoose";
import { IBuilding } from "./building.interface";

export const BuildingSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true },
  name: { type: String, required: true },

});

const Building = mongoose.model<ILecturer>("Building", BuildingSchema);
export default Building;
