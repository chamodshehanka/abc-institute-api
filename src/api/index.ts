import { Router } from "express";

const router: Router = Router();

router.get("/", (_req, res) => {
  res.send("Response from Bodimak API");
});

export default router;
