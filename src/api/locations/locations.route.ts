import { Router } from "express";
import Controller from "./locations.controller";

const Locations: Router = Router();
const controller = new Controller();

Locations.post("/add", controller.addLocation);
Locations.put("/update", controller.updateLocation);
Locations.delete("/delete/:id", controller.deleteLocation);
Locations.get("/get/:id", controller.getLocationById);
Locations.get("/list", controller.getLocationsList);

export default Locations;