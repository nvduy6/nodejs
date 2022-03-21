import { Router } from "express";
import { create, get, list, remove, update } from "../controllers/users";
const router = Router();
router.get("/user/:id", get);
router.get("/users", list);
router.post("/user", create);
router.put("/user/:id", update);
router.delete("/user/:id", remove);
export default router