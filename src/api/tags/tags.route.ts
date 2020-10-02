import { Router } from "express";
import Controller from "./tags.controller";

const tags: Router = Router();
const controller = new Controller();

tags.post("/add", controller.addTags);
tags.put("/update", controller.updateTags);
tags.delete("/delete/:id", controller.deleteTags);
tags.get("/get/:id", controller.getTagsById);
tags.get("/list", controller.getTagsList);

export default tags;
