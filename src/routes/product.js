import { Router } from 'express';
import { create, get, list, remove, update } from '../controllers/products';
import { checkAuth } from '../middleware/checkAuth';
const router = Router();
router.get("/product", checkAuth, list);
router.get("/product/:id", get)
router.post("/product", checkAuth, create);
router.delete("/product/:id", remove)
router.put("/product/:id", update)
export default router;