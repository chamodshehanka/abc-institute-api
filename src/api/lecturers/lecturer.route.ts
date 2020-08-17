import { Router } from "express";
import Controller from "./lecturer.controller";

const lecturer: Router = Router();
const controller = new Controller();

lecturer.post("/add", controller.addLecturer);
lecturer.put("/update", controller.updateLecturer);
lecturer.delete("/delete/:id", controller.deleteLecturer);
lecturer.get("/get/:id", controller.getLecturerById);
lecturer.get("/list", controller.getLecturersList);

export default lecturer;
