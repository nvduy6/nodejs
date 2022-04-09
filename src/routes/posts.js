import { Router } from "express";
import { add, list, update, remove } from "../controllers/posts";
const router = Router();
router.get("/posts", list);
router.post("/post", add);
router.put("/post/:id", update);
router.delete("/post/:id", remove);

export default router