import * as mongoose from "mongoose";

export interface ISubject extends mongoose.Document {
  _id: mongoose.Schema.Types.ObjectId;
  subjectCode: string;
  subjectName: string;
  offeredYear: number;
  offeredSemester: number;
  lectureHours: number;
  tutorialHours: number;
  labHours: number;
  evaluationHours: number;
}
