const { Router } = require('express');
const { checkAuth } = require('../middleware/checkAuth')
const router = Router();
router.get("/product", checkAuth, (req, res) => {
    const products = [{ id: 1, name: "product" }, { id: 2, name: "productB" }, ];
    res.json(products)
});
router.post("/product", checkAuth, (req, res) => {
    const products = [{ id: 1, name: "product" }, { id: 2, name: "productB" }, ];
    products.push(req.body);
    res.json(products);
});
module.exports = router;