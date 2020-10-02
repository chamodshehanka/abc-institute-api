import { Request, Response } from "express";
import * as mongodb from "mongodb";
import * as responses from "../../helpers/responses.handler";
import ErrorCodes from "../../config/error.codes";
import SuccessCodes from "../../config/success.codes";
import { MongoHelper } from "../../config/mongodb.config";
import Timeslot from "./timeslot.class";

const getCollection = () => {
  return MongoHelper.client.db("Cluster0").collection("timeslots");
};

export default class TimeslotController {
  public addTimeslot = async (req: Request, res: Response): Promise<any> => {
    const requestData = req.body;
    const collection: mongodb.Collection = getCollection();

    const timeslot = new Timeslot(requestData);

    collection
      .insertOne(timeslot)
      .then(() => {
        res
          .status(200)
          .send(responses.success(SuccessCodes.SUCCESSFULLY_DATA_ADDED));
        res.end();
      })
      .catch((err: any) => {
        console.error(err);
        res.send(responses.failed(ErrorCodes.INTERNAL_ERROR, 400));
      });
  };
}
