import * as mongoose from "mongoose";
import { INotAvailableTime } from "./notAvailableTime.interface";

export const NotAvailableTimeSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true },
  type: { type: String, required: true },
  typeId: { type: String, required: true },
  name: { type: String, required: true },
  day: { type: String, required: true },
  stime: { type: String, required: true },
  ltime: { type: String, required: true },
});

const NotAvailableTime = mongoose.model<INotAvailableTime>(
  "NotAvailableTime",
  NotAvailableTimeSchema
);
export default NotAvailableTime;
