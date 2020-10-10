import { Router } from "express";
import workingDays from "./working-days/working.days.route";
import timetable from "./timetable/timetable.route";
import subjects from "./subjects/subject.route";
import lecturers from "./lecturers/lecturer.route";
import yearSemester from "./academic-year-semester/year.route";
import programme from "./programme/programme.route";
import tags from "./tags/tags.route";
import group from "./group/group.route";
import genaraeteGroup from "./generatedGroups/generatedGroup.route";
import subGroup from "./sub-group/subGroup.route";
import genaraeteSubGroup from "./generatedSubGroups/generatedSubGroup.route";
import buildings from "./buildings/buildings.route";
import rooms from "./rooms/rooms.route";
import sessions from "./sessions/session.route";
import NotAvailable from "./notAvailableTime/notAvailableTime.route";
import timeslot from "./timeslots/timeslot.route";
import psessions from "./parallelSession/parallelSession.route";
import csessions from "./consecutiveSession/consecutiveSession.route";
import osessions from "./overlapSession/overlapSession.route";
import subjectsWithTags from "./subjectsWithTags/subjectsWithTags.route";

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
router.use("/genaraeteGroup", genaraeteGroup);
router.use("/subGroup", subGroup);
router.use("/genaraeteSubGroup", genaraeteSubGroup);
router.use("/buildings", buildings);
router.use("/rooms", rooms);
router.use("/sessions", sessions);
router.use("/NotAvailable", NotAvailable);
router.use("/timeslot", timeslot);
router.use("/psessions", psessions);
router.use("/csessions", csessions);
router.use("/osessions", osessions);
router.use("/subjectsWithTags", subjectsWithTags);

export default router;
