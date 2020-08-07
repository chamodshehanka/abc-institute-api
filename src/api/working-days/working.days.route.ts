import { Router } from "express";
import Controller from "./working.days.controller";

const workingDays: Router = Router();
const controller = new Controller();

workingDays.post("/add", controller.addWorkingDays);
workingDays.get("/list", controller.getWorkingDaysList);

export default workingDays;
