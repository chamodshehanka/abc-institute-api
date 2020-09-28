import { Router } from "express";
import Controller from "./generatedGroup.controller";

const genaraeteGroup: Router = Router();
const controller = new Controller();

genaraeteGroup.post("/add", controller.GeneratedGroupAdd);
genaraeteGroup.delete("/delete/:id", controller.deleteGroup);
genaraeteGroup.get("/get/:id", controller.getGroupById);
genaraeteGroup.get("/list", controller.GeneratedGrouplist);

export default genaraeteGroup;
