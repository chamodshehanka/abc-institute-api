import * as mongoose from "mongoose";
import { ITimetable } from "./timetable.interface";

export const TimetableSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true },
  name: { type: String, required: true },
});

const Timetable = mongoose.model<ITimetable>("Timetable", TimetableSchema);
export default Timetable;
