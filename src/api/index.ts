import { Router } from "express";
import workingDays from "./working-days/working.days.route";
import timetable from "./timetable/timetable.route";
import subjects from "./subjects/subject.route";
import lecturers from "./lecturers/lecturer.route";
import yearSemester from "./academic-year-semester/year.route";
import programme from "./programme/programme.route";
import tags from "./tags/tags.route";
import group from "./group/group.route";
import subGroup from "./sub-group/subGroup.route";
import buildings from "./buildings/buildings.route";
import rooms from "./rooms/rooms.route";

const router: Router = Router();

router.get("/", (_req, res) => {
  res.send("Response from Bodimak API");
});

router.use("/working-days", workingDays);
router.use("/timetable", timetable);
router.use("/subjects", subjects);
router.use("/lecturers", lecturers);
router.use("/yearSemester", yearSemester);
router.use("/programme", programme);
router.use("/tags", tags);
router.use("/group", group);
router.use("/subGroup", subGroup);
router.use("/buildings", buildings);
router.use("/rooms", rooms);

export default router;
