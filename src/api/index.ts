import { Router } from "express";
import workingDays from "./working-days/working.days.route";
import timetable from "./timetable/timetable.route";
import lecturers from "./lecturers/lecturer.route";

const router: Router = Router();

router.get("/", (_req, res) => {
  res.send("Response from Bodimak API");
});

router.use("/working-days", workingDays);
router.use("/timetable", timetable);
router.use("/lecturers", lecturers);

export default router;
