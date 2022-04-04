import { Router } from "express";
import { add, list, update } from "../controllers/posts";
const router = Router();
router.get("/posts", list);
router.post("/post", add);
router.put("/post/:id", update)
export default router