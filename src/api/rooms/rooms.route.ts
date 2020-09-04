import { Router } from "express";
import Controller from "./rooms.controller";

const Rooms: Router = Router();
const controller = new Controller();

Rooms.post("/add", controller.addRoom);
Rooms.put("/update", controller.updateRoom);
Rooms.delete("/delete/:id", controller.deleteRoom);
Rooms.get("/get/:id", controller.getRoomById);
Rooms.get("/list", controller.getRoomsList);

export default Rooms;