import { Router } from "express";
import Controller from "./timeslot.controller";

const timeslot: Router = Router();
const controller = new Controller();

timeslot.post("/add", controller.addTimeslot);

export default timeslot;
