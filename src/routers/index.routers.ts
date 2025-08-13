import { Router } from "express";
import countryRouter from "./coutry/contry.router";

const router = Router();
router.use("/country", countryRouter);

export default router;
