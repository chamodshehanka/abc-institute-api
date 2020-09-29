import { Router } from "express";
import Controller from "./generatedSubGroup.controller";

const genaraeteSubGroup: Router = Router();
const controller = new Controller();

genaraeteSubGroup.post("/add", controller.GeneratedSubGroupAdd);
genaraeteSubGroup.delete("/delete/:id", controller.deleteSubGroup);
genaraeteSubGroup.get("/get/:id", controller.getSubGroupById);
genaraeteSubGroup.get("/list", controller.GeneratedSubGrouplist);

export default genaraeteSubGroup;
