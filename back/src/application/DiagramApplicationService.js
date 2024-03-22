const generateDiagramUseCase = require("./GenerateDiagramUseCase");

async function generateDiagram(text, scriptPath, imagePath) {
  try {
    return await generateDiagramUseCase(text, scriptPath, imagePath);
  } catch (error) {
    console.error("Error generating image", error);
    throw new Error("Error generating image");
  }
}

module.exports = generateDiagram;
