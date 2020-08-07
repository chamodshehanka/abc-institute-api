import { Router } from "express";
import Controller from "./working.days.controller";

const workingDays: Router = Router();
const controller = new Controller();

workingDays.post("/add", controller.addWorkingDays);
workingDays.put("/update", controller.updateWorkingDays);
workingDays.delete("/delete/:id", controller.deleteWorkingDays);
workingDays.get("/get/:id", controller.getWorkingDaysById);
workingDays.get("/list", controller.getWorkingDaysList);

export default workingDays;
