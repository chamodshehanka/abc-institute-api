import { Request, Response } from "express";
import * as responses from "../../helpers/responses.handler";
import ErrorCodes from "../../config/error.codes";
import SuccessCodes from "../../config/success.codes";
import { MongoHelper } from "../../config/mongodb.config";
import SubjectsWithTags from "./subjectsWithTags.class";

const getCollection = () => {
  return MongoHelper.client.db("Cluster0").collection("subjectsWithTags");
};

export default class SubjectsWithTagsController {
  public addSubjectWithTag = async (
    req: Request,
    res: Response
  ): Promise<any> => {
    const requestData = req.body;
    const collection: any = getCollection();

    const addSubjectWithTag = new SubjectsWithTags(requestData);

    collection
      .insertOne(addSubjectWithTag)
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

  public getSubjectsWithTagsList = async (
    req: Request,
    res: Response
  ): Promise<any> => {
    const collection: any = getCollection();

    try {
      collection.find({}).toArray((err: any, items: any[]) => {
        if (err) {
          console.error("Caught error", err);
          res
            .status(500)
            .send(responses.failed(ErrorCodes.INTERNAL_ERROR, 400));
          res.end();
        } else {
          res
            .status(200)
            .send(
              responses.successWithPayload(
                SuccessCodes.SUCCESSFULLY_DATA_RETRIVED,
                items
              )
            );
        }
      });
    } catch (err) {
      console.error(err);
      res.send(responses.failed(ErrorCodes.INTERNAL_ERROR, 400));
    }
  };
}
