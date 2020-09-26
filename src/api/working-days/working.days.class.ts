import * as mongoose from "mongoose";
import { IWorkingDays } from "./working.days.interface";

export const WorkingDaysSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true },
  name: { type: String, required: true },
  workingHours: {
    type: {
      moday: { hours: Number, mins: Number },
      tuesday: { hours: Number, mins: Number },
      wednesday: { hours: Number, mins: Number },
      thursday: { hours: Number, mins: Number },
      friday: { hours: Number, mins: Number },
      saturday: { hours: Number, mins: Number },
      sunday: { hours: Number, mins: Number },
    },
  },
  selectedDays: {
    type: {
      monday: Boolean,
      tuesday: Boolean,
      wednesday: Boolean,
      thursday: Boolean,
      friday: Boolean,
      saturday: Boolean,
      sunday: Boolean,
    },
    required: true,
  },
  prefferedTimeSlots: {
    type: {
      thirty: Boolean,
      sixty: Boolean,
    },
  },
});

const WorkingDays = mongoose.model<IWorkingDays>(
  "WorkingDays",
  WorkingDaysSchema
);
export default WorkingDays;
