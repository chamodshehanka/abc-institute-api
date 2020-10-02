import * as mongoose from "mongoose";
import { IYear } from "./year.interface";

export const YearSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true },
  year: { type: String, required: true },
  semester: { type: String, required: true },
});

const yearSemester = mongoose.model<IYear>("yearSemester", YearSchema);
export default yearSemester;
