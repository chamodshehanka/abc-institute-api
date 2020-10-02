import { Router } from "express";
import Controller from "./overlapSession.controller";

const osessions: Router = Router();
const controller = new Controller();

osessions.post("/add", controller.addOSession);
osessions.delete("/delete/:id", controller.deleteOSession);
osessions.get("/get/:id", controller.getOSessionById);
osessions.get("/list", controller.getOSessionsList);

export default osessions;
