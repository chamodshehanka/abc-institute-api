import { Router } from "express";
import Controller from "./parallelSession.controller";

const psessions: Router = Router();
const controller = new Controller();

psessions.post("/add", controller.addPSession);
psessions.delete("/delete/:id", controller.deletePSession);
psessions.get("/get/:id", controller.getPSessionById);
psessions.get("/list", controller.getPSessionsList);

export default psessions;
