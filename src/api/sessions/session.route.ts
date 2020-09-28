import { Router } from "express";
import Controller from "./session.controller";

const sessions: Router = Router();
const controller = new Controller();

sessions.post("/add", controller.addSession);
sessions.put("/update", controller.updateSession);
sessions.delete("/delete/:id", controller.deleteSession);
sessions.get("/get/:id", controller.getSessionById);
sessions.get("/list", controller.getSessionsList);

export default sessions;
