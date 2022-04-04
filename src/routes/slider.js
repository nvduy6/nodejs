import { Router } from "express";
import { add, list, remove } from "../controllers/slider";
const router = Router();
router.get("/sliders", list);
router.post("/sliders", add);
router.delete("/sliders/:id", remove)
export default router;