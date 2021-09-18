const defaultFont = require("./fonts/font5x7unicode");

module.exports = fontToMatrix = (text, font = defaultFont) => {
  font = font || defaultFont;
  let matrix = Array.from(Array(font.height).keys()).map(() => []);

  text.split("").map((char) => {
    const code = char.charCodeAt(0);
    const characterMatrix = font.characters[code] || [];
    matrix = matrix.map((row, index) => [
      ...row,
      0,
      ...(characterMatrix[index] || []),
    ]);
  });

  if (font.height === 5) {
    const matrixSize = matrix[0].length;
    const emptyRow = Array.from(Array(matrixSize).keys()).map(() => 0);
    matrix = [emptyRow, ...matrix, emptyRow];
  }

  return matrix;
};
