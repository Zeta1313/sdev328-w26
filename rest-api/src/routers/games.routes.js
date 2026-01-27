import { Router } from "express";
import * as ctl from './../controllers/games.controller.js';

const router = Router();

router.get("/", ctl.allGames);
router.get("/game", ctl.gameById);
router.get("/game/genres", ctl.getGenres);
router.post("/game", ctl.addGame);

export default router;