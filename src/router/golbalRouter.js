import express from "express";
import { homeController } from "../controller/globalController";

const globalRouter = express.Router();

globalRouter.get("/", homeController);

export default globalRouter;
