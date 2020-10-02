import * as mongoose from "mongoose";
import { ITimeslot } from "./timeslot.interface";

export const TimeslotSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  day: { type: String, required: true },
  session: { type: String, required: true },
});

const Timeslot = mongoose.model<ITimeslot>("Timeslot", TimeslotSchema);
export default Timeslot;
