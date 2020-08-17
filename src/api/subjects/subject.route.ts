import { Router } from "express";
import Controller from "./subject.controller";

const subjects: Router = Router();
const controller = new Controller();

subjects.post("/add", controller.addSubject);
subjects.put("/update", controller.updateSubject);
subjects.delete("/delete/:id", controller.deleteSubject);
subjects.get("/get/:id", controller.getSubjectById);
subjects.get("/list", controller.getSubjectsList);

export default subjects;
