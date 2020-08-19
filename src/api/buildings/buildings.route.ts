import { Router } from "express";
import Controller from "./buildings.controller";

const Buildings: Router = Router();
const controller = new Controller();

Buildings.post("/add", controller.addBuilding);
Buildings.put("/update", controller.updateBuilding);
Buildings.delete("/delete/:id", controller.deleteBuilding);
Buildings.get("/get/:id", controller.getBuildingById);
Buildings.get("/list", controller.getBuildingsList);

export default Buildings;
