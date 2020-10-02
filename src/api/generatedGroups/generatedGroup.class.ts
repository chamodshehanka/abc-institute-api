import * as mongoose from "mongoose";
import { IGeneratedGroup } from "./generatedGroup.interface";

export const GeneratedGroupSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true },
  groupId: { type: String, required: true },
});

const GeneratedGroup = mongoose.model<IGeneratedGroup>(
  "GeneratedGroup",
  GeneratedGroupSchema
);
export default GeneratedGroup;
