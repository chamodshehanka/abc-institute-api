import * as mongoose from "mongoose";

export interface IGeneratedSubGroup extends mongoose.Document {
  _id: mongoose.Schema.Types.ObjectId;
  groupId: string;
}
