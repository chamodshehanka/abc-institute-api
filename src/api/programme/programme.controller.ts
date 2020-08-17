import { Request, Response } from "express";
import * as mongodb from "mongodb";
import * as responses from "../../helpers/responses.handler";
import ErrorCodes from "../../config/error.codes";
import SuccessCodes from "../../config/success.codes";
import { MongoHelper } from "../../config/mongodb.config";
import Programme from "./programme.class";

const getCollection = () => {
  return MongoHelper.client.db("Cluster0").collection("programme");
};

export default class ProgrammeController {
  public addProgramme = async (req: Request, res: Response): Promise<any> => {
    const requestData = req.body;
    const collection: any = getCollection();

    const programme = new Programme(requestData);

    collection
      .insertOne(programme)
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

  public updateProgramme = async (
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

  public deleteProgramme = async (
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

  public getProgrammeById = async (
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

  public getProgrammeList = async (
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
          // items = items.map(
          //   (item: { _id: any; name: any; email: any; phone: any }) => {
          //     return {
          //       id: item._id,
          //       name: item.name,
          //     };
          //   }
          // );

          res
            .status(200)
            .send(
              responses.successWithPayload(
                SuccessCodes.SUCCESSFULLY_DATA_RETRIVED,
                { data: items }
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
