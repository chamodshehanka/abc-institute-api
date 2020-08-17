import * as mongoose from "mongoose";
import { IProgramme } from "./programme.interface";

export const ProgrammeSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true },
  name: { type: String, required: true },
});

const Programme = mongoose.model<IProgramme>("Programme", ProgrammeSchema);
export default Programme;
