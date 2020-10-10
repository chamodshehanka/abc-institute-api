import { Router } from "express";
import Controller from "./subjectsWithTags.controller";

const SubjectsWithTags: Router = Router();
const controller = new Controller();

SubjectsWithTags.post("/add", controller.addSubjectWithTag);
SubjectsWithTags.get("/list", controller.getSubjectsWithTagsList);

export default SubjectsWithTags;
