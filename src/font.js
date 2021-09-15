const defaultFont = require("./fonts/font5x7unicode");

module.exports = fontToMatrix = (text, font = defaultFont) => {
  let matrix = Array.from(Array(font.height).keys()).map(() => []);

  text.split("").map((char) => {
    const code = char.charCodeAt(0);
    const characterMatrix = defaultFont.characters[code];
    matrix = matrix.map((row, index) => [...row, 0, ...characterMatrix[index]]);
  });
  return matrix;
};
