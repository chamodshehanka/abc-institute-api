import * as mongoose from "mongoose";

export interface IBuilding extends mongoose.Document {
  _id: mongoose.Schema.Types.ObjectId;
  buildingName: string;
}
