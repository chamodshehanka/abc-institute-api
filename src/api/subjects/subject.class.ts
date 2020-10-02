import * as mongoose from "mongoose";
import { ISubject } from "./subject.interface";

export const SubjectSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true },
  subjectCode: { type: String, required: true },
  subjectName: { type: String, required: true },
  offeredYear: { type: Number, required: true },
  offeredSemester: { type: Number, required: true },
  lectureHours: { type: Number, required: true },
  tutorialHours: { type: Number, required: true },
  labHours: { type: Number, required: true },
  evaluationHours: { type: Number, required: true },
});

const Subject = mongoose.model<ISubject>("Subject", SubjectSchema);
export default Subject;
