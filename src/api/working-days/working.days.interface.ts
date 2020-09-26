import * as mongoose from "mongoose";

export interface IWorkingDays extends mongoose.Document {
  _id: mongoose.Schema.Types.ObjectId;
  name: string;
  workingHours: {
    monday: { hours: number; mins: number };
    tuesday: { hours: number; mins: number };
    wednesday: { hours: number; mins: number };
    thursday: { hours: number; mins: number };
    friday: { hours: number; mins: number };
    saturday: { hours: number; mins: number };
    sunday: { hours: number; mins: number };
  };
  selectedDays: {
    monday: boolean;
    tuesday: boolean;
    wednesday: boolean;
    thursday: boolean;
    friday: boolean;
    saturday: boolean;
    sunday: boolean;
  };
  prefferedTimeSlots: {
    thirty: boolean;
    sixty: boolean;
  };
}
