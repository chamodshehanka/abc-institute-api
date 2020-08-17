import { Router } from "express";
import workingDays from "./working-days/working.days.route";
import timetable from "./timetable/timetable.route";
import subjects from "./subjects/subject.route";
import lecturers from "./lecturers/lecturer.route";
import yearSemester from "./academic-year-semester/year.route";

const router: Router = Router();

router.get("/", (_req, res) => {
  res.send("Response from Bodimak API");
});

router.use("/working-days", workingDays);
router.use("/timetable", timetable);
router.use("/subjects", subjects);
router.use("/lecturers", lecturers);
router.use("/yearSemester", yearSemester);

export default router;
