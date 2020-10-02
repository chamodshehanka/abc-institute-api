import * as mongoose from "mongoose";
import { IOSession } from "./overlapSession.interface";

export const OSessionSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true },
  osessions: { type: [String], required: true },
});

const OSession = mongoose.model<IOSession>("OSession", OSessionSchema);
export default OSession;
