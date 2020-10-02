import { Router } from "express";
import Controller from "./subGroup.controller";

const subGroup: Router = Router();
const controller = new Controller();

subGroup.post("/add", controller.addSubGroup);
subGroup.put("/update", controller.updateSubGroup);
subGroup.delete("/delete/:id", controller.deleteSubGroup);
subGroup.get("/get/:id", controller.getSubGroupById);
subGroup.get("/list", controller.getSubGroupList);

export default subGroup;
