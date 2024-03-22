/* eslint-disable no-console */
/* eslint-disable no-undef */
const express = require("express");
const bodyParser = require("body-parser");
const DiagramController = require("./src/presentation/controller/DiagramController");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.text({ type: "text/plain" }));

app.use(DiagramController);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
