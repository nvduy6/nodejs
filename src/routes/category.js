import { Router } from "express";
import { create, list, read, remove, update } from "../controllers/category";
import { checkAuth } from "../middleware/checkAuth";
const routercate = Router();
routercate.get("/categorys", checkAuth, list);
// routercate.get("/category/:id", get);
routercate.post("/category", checkAuth, create);
routercate.get('/category/:slug', checkAuth, read)
routercate.delete("/category/:id", remove);
routercate.put("/category/:id", update)
export default routercate;