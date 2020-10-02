import { Router } from "express";
import Controller from "./consecutiveSession.controller";

const csessions: Router = Router();
const controller = new Controller();

csessions.post("/add", controller.addCSession);
csessions.delete("/delete/:id", controller.deleteCSession);
csessions.get("/get/:id", controller.getCSessionById);
csessions.get("/list", controller.getCSessionsList);

export default csessions;
