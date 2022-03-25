import { Router } from 'express';
import { create, get, list, remove, update } from '../controllers/products';
import { checkAuth, isAuth, requireSignin } from '../middleware/checkAuth';
const router = Router();
router.get("/products", checkAuth, list);
router.get("/product/:id", get)
router.post("/product", requireSignin, isAuth, create);
router.delete("/product/:id", remove)
router.put("/product/:id", update)
export default router;