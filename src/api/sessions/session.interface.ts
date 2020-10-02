import * as mongoose from "mongoose";

export interface ISession extends mongoose.Document {
  _id: mongoose.Schema.Types.ObjectId;
  lecturers: string[];
  tags: string;
  studentGroup: string;
  subject: string;
  subjectCode: string;
  noOfStudents: number;
  duration: number;
  rooms: string[];
}
