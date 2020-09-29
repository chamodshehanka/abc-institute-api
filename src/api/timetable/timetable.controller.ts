import { Request, Response } from "express";
import * as mongodb from "mongodb";
import * as responses from "../../helpers/responses.handler";
import ErrorCodes from "../../config/error.codes";
import SuccessCodes from "../../config/success.codes";
import { MongoHelper } from "../../config/mongodb.config";
import Timetable from "./timetable.class";
import {
  generateTimetableByLecturer,
  generateTimetableByRoom,
  generateTimetableByStudentGroup,
} from "./timetable.generator";

const getCollection = () => {
  return MongoHelper.client.db("Cluster0").collection("timetables");
};

const getNotAvailableTime = () => {
  return MongoHelper.client.db("Cluster0").collection("notAvailableTimes");
};

export default class TimetableController {
  public generateTimetable = async (
    req: Request,
    res: Response
  ): Promise<any> => {
    const { input, type } = req.body;

    switch (type) {
      case "lecturer":
        generateTimetableByLecturer(input);
        break;
      case "stdGroup":
        generateTimetableByStudentGroup(input);
        break;
      case "room":
        generateTimetableByRoom(input);
        break;
      default:
        res.send(responses.failed(ErrorCodes.INVALID_TYPE));
    }
  };

  public addTimetable = async (req: Request, res: Response): Promise<any> => {
    const requestData = req.body;
    const collection: any = getCollection();

    const timetable = new Timetable(requestData);

    collection
      .insertOne(timetable)
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

  public updateTimetable = async (
    req: Request,
    res: Response
  ): Promise<any> => {
    const { _id, name } = req.body;
    const collection: any = getCollection();

    collection
      .findOneAndUpdate(
        {
          _id: new mongodb.ObjectId(_id),
        },
        {
          $set: {
            name: name,
          },
        }
      )
      .then(() => {
        res.send(responses.success(SuccessCodes.SUCCESSFULLY_DATA_UPDATED));
      })
      .catch((err: any) => {
        console.error(ErrorCodes.USER_UPDATE_FAILED, err);
        res.send(responses.failed(ErrorCodes.DATA_UPDATE_FAILED));
      });
  };

  public deleteTimetable = async (
    req: Request,
    res: Response
  ): Promise<any> => {
    const id = req.params.id;
    const collection: any = getCollection();

    collection
      .deleteOne({ _id: new mongodb.ObjectId(id) })
      .then(() => {
        res.send(responses.success(SuccessCodes.SUCCESSFULLY_DATA_DELETED));
      })
      .catch((err: any) => {
        console.error(err);
        res.send(responses.failed(ErrorCodes.INTERNAL_ERROR));
      });
  };

  public getTimetableById = async (
    req: Request,
    res: Response
  ): Promise<any> => {
    const collection: any = getCollection();

    collection
      .findOne({ _id: req.params.id })
      .then((data: any) => {
        res.send(
          responses.successWithPayload(
            SuccessCodes.SUCCESSFULLY_DATA_RETRIVED,
            data
          )
        );
      })
      .catch((err: any) => {
        console.error(err);
        res.send(responses.failed(ErrorCodes.INTERNAL_ERROR, 400));
      });
  };

  public getTimetablesList = async (
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
