const { matrixToArray, extractColumns, mergeColumns } = require("./matrix");
const fontToMatrix = require("./font");

const fontScroller = (display, text, config) => {
  config = {
    speed: 80,
    infinite: true,
    font: null,
    intensity: 50,
    ...config,
  };
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
    fontToMatrix(text, config.font)
  );

  let position = 0;
  const matrixLength = matrix[0].length;

  const interval = setInterval(() => {
    const pixelArray = matrixToArray(
      extractColumns(matrix, position, position + 11)
    ).map((l) => (l === 255 ? config.intensity : 0));
    display.show(pixelArray);
    position = position + 1;
    if (position - 1 >= matrixLength) {
      if (config.infinite) {
        position = 0;
      } else {
        clearInterval(interval);
      }
    }
  }, config.speed);
};

module.exports = fontScroller;
