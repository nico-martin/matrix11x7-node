const DisplayController = require("../src/display");
const {
  matrixToArray,
  extractColumns,
  mergeColumns,
} = require("../src/matrix");
const fontToMatrix = require("../src/font");

const matrix = fontToMatrix("Hello World!");

const init = async () => {
  try {
    const display = await DisplayController();
    let position = 0;
    const matrixLength = matrix[0].length;

    const interval = setInterval(() => {
      const pixelArray = matrixToArray(
        extractColumns(matrix, position, position + 11)
      ).map((l) => (l === 255 ? 50 : 0));
      display.show(pixelArray);
      position = position + 1;
      if (position - 2 >= matrixLength) {
        clearInterval(interval);
      }
    }, 100);
  } catch (e) {
    console.error(e);
  }
};

init();
