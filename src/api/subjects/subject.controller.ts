import { Request, Response } from "express";
import * as mongodb from "mongodb";
import * as responses from "../../helpers/responses.handler";
import ErrorCodes from "../../config/error.codes";
import SuccessCodes from "../../config/success.codes";
import { MongoHelper } from "../../config/mongodb.config";
import Subject from "./subject.class";

const getCollection = () => {
  return MongoHelper.client.db("Cluster0").collection("subjects");
};

export default class SubjectController {
  public addSubject = async (req: Request, res: Response): Promise<any> => {
    const requestData = req.body;
    const collection: any = getCollection();

    const subject = new Subject(requestData);

    collection
      .findOne({
        subjectCode: requestData.subjectCode,
      })
      .then((subject) => {
        if (!subject) {
          collection
            .insertOne(subject)
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
        } else {
          res.send(responses.failed(ErrorCodes.ALREADY_EXIST, 400));
        }
      });
  };
  
  public updateSubject = async (req: Request, res: Response): Promise<any> => {
    const {
      _id,
      subjectCode,
      subjectName,
      offeredYear,
      offeredSemester,
      lectureHours,
      tutorialHours,
      labHours,
      evaluationHours,
    } = req.body;
    const collection: any = getCollection();

    collection
      .findOneAndUpdate(
        {
          _id: new mongodb.ObjectId(_id),
        },
        {
          $set: {
            subjectCode: subjectCode,
            subjectName: subjectName,
            offeredYear: offeredYear,
            offeredSemester: offeredSemester,
            lectureHours: lectureHours,
            tutorialHours: tutorialHours,
            labHours: labHours,
            evaluationHours: evaluationHours,
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

  public deleteSubject = async (req: Request, res: Response): Promise<any> => {
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

  public getSubjectById = async (req: Request, res: Response): Promise<any> => {
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

  public getSubjectsList = async (
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
