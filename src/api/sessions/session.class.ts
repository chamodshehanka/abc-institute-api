import * as mongoose from "mongoose";
import { ISession } from "./session.interface";

export const SessionSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true },
  lecturers: { type: [String], required: true },
  tags: { type: String, required: true },
  studentGroup: { type: String, required: true },
  subject: { type: String, required: true },
  subjectCode: { type: String, required: true },
  noOfStudents: { type: Number, required: true },
  duration: { type: Number, required: true },
  rooms: { type: [String], required: true },
});

const Session = mongoose.model<ISession>("Session", SessionSchema);
export default Session;
