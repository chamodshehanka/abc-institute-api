import * as mongoose from "mongoose";
import { ICSession } from "./consecutiveSession.interface";

export const CSessionSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true },
  csessions: { type: [String], required: true },
});

const CSession = mongoose.model<ICSession>("CSession", CSessionSchema);
export default CSession;
