import * as mongoose from "mongoose";
import { ILecturer } from "./lecturer.interface";

export const LecturerSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true },
  name: { type: String, required: true },
  employeeId: { type: String, required: true },
  faculty: { type: String, required: true },
  department: { type: String, required: true },
  centre: { type: String, required: true },
  building: { type: String, required: true },
  level: { type: String, required: true },
  rank: { type: Number, required: true },
});

const Lecturer = mongoose.model<ILecturer>("Lecturer", LecturerSchema);
export default Lecturer;
