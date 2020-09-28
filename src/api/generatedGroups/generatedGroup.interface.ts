import * as mongoose from "mongoose";

export interface IGeneratedGroup extends mongoose.Document {
  _id: mongoose.Schema.Types.ObjectId;
  groupId: string;
}
