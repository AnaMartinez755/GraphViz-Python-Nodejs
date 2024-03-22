const fs = require("fs");
const { generateDiagram, readImage } = require("../src/domain/DiagramService");

jest.mock("fs");

describe("generateDiagram", () => {
  test("should write the text to the specified file", () => {
    const text = "Sample text";
    const scriptPath = "/app/documents/text.txt";
    generateDiagram(text, scriptPath);
    expect(fs.writeFileSync).toHaveBeenCalledWith(scriptPath, text);
  });
});

describe("readImage", () => {
  test("should read the image from the specified file", () => {
    const imagePath = "/app/documents/file.png";
    const imageData = "image data";
    fs.readFileSync.mockReturnValue(imageData);
    const result = readImage(imagePath);
    expect(fs.readFileSync).toHaveBeenCalledWith(imagePath);
    expect(result).toEqual(imageData);
  });

  test("should handle errors when reading the image", () => {
    const imagePath = "/path/to/image.png";
    const errorMessage = "Error";
    fs.readFileSync.mockImplementation(() => {
      throw new Error(errorMessage);
    });

    expect(() => {
      readImage(imagePath);
    }).toThrow(errorMessage);
  });
});
