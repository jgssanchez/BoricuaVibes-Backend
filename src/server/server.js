const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const { serverConfig } = require("../config/config");
require("../dbConnection/dbConnection");

const app = express();
const port = serverConfig.port || 4000;

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.listen(port, () => {
  console.log(`Servidor en el puerto ${port}`);
});

