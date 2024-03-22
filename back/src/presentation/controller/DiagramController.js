const express = require("express");
const generateDiagram = require("../../application/DiagramApplicationService");
const cors = require("cors");

const router = express.Router();

router.use(cors({ origin: "http://localhost:5173" }));

router.post("/generate-diagram", async (req, res) => {
  const plainText = req.body.toString();
  const scriptPath = "/app/input.py";
  const imagePath = "/app/file.png";
  if (!plainText) {
    return res.status(400).send("Missing python code in request body.");
  }
  try {
    const imageBuffer = await generateDiagram(plainText, scriptPath, imagePath);

    res.contentType("image/png");
    res.send(imageBuffer);
  } catch (error) {
    console.error("Error al generar o enviar el diagrama:", error);
    res.status(500).send("Error al generar el diagrama.");
  }
});

module.exports = router;
