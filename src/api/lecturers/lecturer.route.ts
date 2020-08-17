import { Router } from "express";
import Controller from "./lecturer.controller";

const lecturers: Router = Router();
const controller = new Controller();

lecturers.post("/add", controller.addLecturer);
lecturers.put("/update", controller.updateLecturer);
lecturers.delete("/delete/:id", controller.deleteLecturer);
lecturers.get("/get/:id", controller.getLecturerById);
lecturers.get("/list", controller.getLecturersList);

export default lecturers;
