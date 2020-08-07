import * as mongoose from "mongoose";
import { IWorkingDays } from "./working.days.interface";

export const WorkingDaysSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true },
  name: { type: String, required: true },
});

const WorkingDays = mongoose.model<IWorkingDays>(
  "WorkingDays",
  WorkingDaysSchema
);
export default WorkingDays;
