import { Router } from "express";
import workingDays from "./working-days/working.days.route";

const router: Router = Router();

router.get("/", (_req, res) => {
  res.send("Response from Bodimak API");
});

router.use("/working-days", workingDays);

export default router;
