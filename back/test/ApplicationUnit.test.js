const generateDiagramUseCase = require("../src/application/GenerateDiagramUseCase");
const generateDiagram = require("../src/application/DiagramApplicationService");

jest.mock("../src/application/GenerateDiagramUseCase");

describe("generateDiagram", () => {
  test("should generate diagram successfully", async () => {
    const text = "Sample text";
    const scriptPath = "/app/text.txt";
    const imagePath = "/app/file.png";
    const expectedImageData = "image data";

    // Mocking the behavior of generateDiagramUseCase
    generateDiagramUseCase.mockResolvedValue(expectedImageData);
    const result = await generateDiagram(text, scriptPath, imagePath);
    expect(result).toEqual(expectedImageData);
    expect(generateDiagramUseCase).toHaveBeenCalledWith(
      text,
      scriptPath,
      imagePath
    );
  });

  test("should handle error when generating diagram", async () => {
    const text = "Sample text";
    const scriptPath = "/app/text.txt";
    const imagePath = "/app/file.png";
    const expectedError = new Error("Error generating image");
    generateDiagramUseCase.mockRejectedValue(expectedError);
    await expect(generateDiagram(text, scriptPath, imagePath)).rejects.toThrow(
      expectedError
    );
    expect(generateDiagramUseCase).toHaveBeenCalledWith(
      text,
      scriptPath,
      imagePath
    );
  });
});
