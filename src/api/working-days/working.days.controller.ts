import { Request, Response } from "express";
import * as mongodb from "mongodb";
import * as responses from "../../helpers/responses.handler";
import ErrorCodes from "../../config/error.codes";
import SuccessCodes from "../../config/success.codes";
import { MongoHelper } from "../../config/mongodb.config";
import bcrypt = require("bcrypt");
import jwt = require("jsonwebtoken");
import WorkingDays from "./working.days.class";

const getCollection = () => {
  return MongoHelper.client.db("bodimak").collection("admins");
};

export default class UserController {
  public addWorkingDays = async (req: Request, res: Response): Promise<any> => {
    const requestData = req.body;
    const collection: any = getCollection();

    const workingDays = new WorkingDays(requestData);

    collection
      .insertOne(workingDays)
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
