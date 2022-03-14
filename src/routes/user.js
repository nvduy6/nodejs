const { Router } = require('express');
const Pople = Router();
Pople.get("/users", (req, res) => {
    const users = [{ id: 1, name: "Duy", age: 20 }, { id: 2, name: "Hanh", age: 20 }, ]
    res.json(users)
});
Pople.post("/users", (req, res) => {
    const users = [{ id: 1, name: "Duy", age: "20" }, { id: 2, name: "Hanh", age: 20 }, ];
    users.push(req.body);
    res.json(users);
})
module.exports = Pople;