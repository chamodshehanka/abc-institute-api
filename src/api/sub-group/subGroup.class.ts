import * as mongoose from "mongoose";
import { ISubGroup } from "./subGroup.interface";

export const SubGroupSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true },
  number: { type: String, required: true },
  rooms: { type: [String], required: true },
});

const SubGroup = mongoose.model<ISubGroup>("SubGroup", SubGroupSchema);
export default SubGroup;
