const DiagramService = require("../domain/DiagramService");
const { exec } = require("child_process");
const pythonScriptPath = "/app/input.py";

async function generateImage() {
  exec(`python3 ${pythonScriptPath}`, (error, stdout, stderr) => {
    if (error) {
      console.log(`Error al ejecutar el script de Python: ${error.message}`);
      return;
    }

    if (stderr) {
      console.log(`Salida de error del script de Python: ${stderr}`);
    }

    console.log(`Salida del script de Python: ${stdout}`);
  });
}
async function generateDiagramUseCase(text, scriptPath, imagePath) {
  DiagramService.generateDiagram(text, scriptPath);
  await generateImage();
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const imageBuffer = DiagramService.readImage(imagePath);
        resolve(imageBuffer);
      } catch (error) {
        reject(error);
      }
    }, 1500);
  });
}

module.exports = generateDiagramUseCase;
