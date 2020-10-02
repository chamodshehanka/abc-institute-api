import * as mongoose from "mongoose";
import { IGeneratedSubGroup } from "./generatedSubGroup.interface";

export const GeneratedSubGroupSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true },
  groupId: { type: String, required: true },
});

const GeneratedSubGroup = mongoose.model<IGeneratedSubGroup>(
  "GeneratedSubGroup",
  GeneratedSubGroupSchema
);
export default GeneratedSubGroup;
