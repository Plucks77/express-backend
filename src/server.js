const express = require("express");
const routes = require("./routes");

require("./database/index");

const app = express();
// const server = require("http").Server(app);

app.use(express.json());
app.use(routes);

app.listen(3333);
// server.listen(3333);
