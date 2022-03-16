const { Router } = require('express');
import { create, get, list, remove, update } from '../controllers/users';
import { checkAuth } from '../middleware/checkAuth';
const pople = Router();
pople.get("/users", checkAuth, list);
pople.get("/user/:id", get);
pople.post("/user", checkAuth, create);
pople.delete("/user/:id", remove);
pople.put("/user/:id", update)
export default pople;