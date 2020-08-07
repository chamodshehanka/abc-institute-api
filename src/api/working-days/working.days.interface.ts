import * as mongoose from "mongoose";

export interface IWorkingDays extends mongoose.Document {
  _id: mongoose.Schema.Types.ObjectId;
  name: string;
  workingHours: {
    hours: Number;
    mins: Number;
  };
  selectedDays: {
    monday: Boolean;
    tuesday: Boolean;
    wednesday: Boolean;
    thursday: Boolean;
    friday: Boolean;
    saturday: Boolean;
    sunday: Boolean;
  };
  prefferedTimeSlots: {
    thirty: Boolean;
    sixty: Boolean;
  };
}
