import * as mongoose from "mongoose";
import { IBuilding } from "./buildings.interface";

export const BuildingSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true },
  buildingName: { type: String, required: true },
});

const Building = mongoose.model<IBuilding>("Building", BuildingSchema);
export default Building;
