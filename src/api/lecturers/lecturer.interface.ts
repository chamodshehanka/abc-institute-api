import * as mongoose from "mongoose";

export interface ILecturer extends mongoose.Document {
  _id: mongoose.Schema.Types.ObjectId;
  name: string;
  employeeId: string;
  faculty: string;
  department: string;
  centre: string;
  building: string;
  level: number;
  rank: string;
  room: string;
}
