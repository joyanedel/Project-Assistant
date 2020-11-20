const router = require("express").Router();
const {cliente} = require("../src/models");
const {usuario} = require("../src/models");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
    console.log(req.body);
    try {
        const usuarioValid = await usuario.findOne({
            where: {
                mail: req.body.mail,
            },
        });
        if (usuarioValid) return res.status(400).send("El usuario ya existe.");

        const salt = await bcrypt.genSalt(10);
        const default_pass = "cliente123";
        const hashPass = await bcrypt.hash(default_pass, salt);

        const client = await cliente.create({
            id: req.body.id,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            mail: req.body.mail,
            empresa: req.body.empresa,
        });

        const user = await usuario.create({
            mail: req.body.mail,
            pass: hashPass,
            coordinador_id: null,
            desarrollador_id: null,
            cliente_id: req.body.id,
        });

        return res.send(user);

    } catch (error){
        res.status(400).send(error);
    }
});

router.get("/", async (req, res) => {
    try {
        const clients = await cliente.findAll();
        return res.send(clients);
    } catch (error){
        res.status(400).send(error);
    }
});

module.exports = router;