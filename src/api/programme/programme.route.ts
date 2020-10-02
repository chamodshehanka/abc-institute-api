import { Router } from "express";
import Controller from "./programme.controller";

const programme: Router = Router();
const controller = new Controller();

programme.post("/add", controller.addProgramme);
programme.put("/update", controller.updateProgramme);
programme.delete("/delete/:id", controller.deleteProgramme);
programme.get("/get/:id", controller.getProgrammeById);
programme.get("/list", controller.getProgrammeList);

export default programme;
