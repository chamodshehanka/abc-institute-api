import { Router } from "express";
import Controller from "./notAvailableTime.controller";

const NotAvailable: Router = Router();
const controller = new Controller();

NotAvailable.post("/add", controller.addNotAvailableController);
NotAvailable.put("/update", controller.updateNotAvailable);
NotAvailable.delete("/delete/:id", controller.deleteNotAvailable);
NotAvailable.get("/get/:id", controller.getNotAvailableById);
NotAvailable.get("/list", controller.getNotAvailableList);

export default NotAvailable;
