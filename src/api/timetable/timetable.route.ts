import { Router } from "express";
import Controller from "./timetable.controller";

const timetable: Router = Router();
const controller = new Controller();

timetable.post("/add", controller.addTimetable);
timetable.put("/update", controller.updateTimetable);
timetable.delete("/delete/:id", controller.deleteTimetable);
timetable.get("/get/:id", controller.getTimetableById);
timetable.get("/list", controller.getTimetablesList);

export default timetable;
