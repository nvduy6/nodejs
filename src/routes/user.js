import { Router } from "express";
import { signin, signup, } from "../controllers/users";
const router = Router();
router.post("/user", signup);
router.get("/user", signin)
export default router