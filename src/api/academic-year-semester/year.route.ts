import { Router } from "express";
import Controller from "./year.controller";

const yearSemester: Router = Router();
const controller = new Controller();

yearSemester.post("/add", controller.addYearSemester);
yearSemester.put("/update", controller.updateYearSemester);
yearSemester.delete("/delete/:id", controller.deleteYearSemester);
yearSemester.get("/get/:id", controller.getYearSemesterById);
yearSemester.get("/list", controller.getYearSemesterList);

export default yearSemester;
