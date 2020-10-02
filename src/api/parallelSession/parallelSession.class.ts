import * as mongoose from "mongoose";
import { IPSession } from "./parallelSession.interface";

export const PSessionSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true },
  psessions: { type: [String], required: true },
});

const PSession = mongoose.model<IPSession>("PSession", PSessionSchema);
export default PSession;
