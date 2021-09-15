const { matrixToArray, extractColumns, mergeColumns } = require("./matrix");
const fontToMatrix = require("./font");

const fontScroller = (display, text, speed = 80, infinite = true) => {
  const matrix = mergeColumns(
    [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    fontToMatrix(text)
  );

  let position = 0;
  const matrixLength = matrix[0].length;

  const interval = setInterval(() => {
    const pixelArray = matrixToArray(
      extractColumns(matrix, position, position + 11)
    ).map((l) => (l === 255 ? 50 : 0));
    display.show(pixelArray);
    position = position + 1;
    if (position - 1 >= matrixLength) {
      if (infinite) {
        position = 0;
      } else {
        clearInterval(interval);
      }
    }
  }, speed);
};

module.exports = fontScroller;
