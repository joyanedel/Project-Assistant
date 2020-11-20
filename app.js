const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

app.enable("trust proxy");
app.use(cors());
app.use(express.json());
app.use("/registro", require("./rutas/registro"));

app.listen(3000, () => {
    console.log("El servidor está funcionando.");
})
