const fs = require("fs");

function generateDiagram(text, scriptPath) {
  fs.writeFileSync(scriptPath, text);
}

function readImage(imagePath) {
  try {
    return fs.readFileSync(imagePath);
  } catch (error) {
    console.error("Error:", error);
    throw new Error("Error");
  }
}

module.exports = {
  generateDiagram,
  readImage,
};
