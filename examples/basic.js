const DisplayController = require("../src/display");
const { matrixToArray } = require("../src/helpers");

const matrix = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 50, 0, 50, 0, 50, 50, 50, 0, 50, 0],
  [0, 50, 0, 50, 0, 50, 0, 0, 0, 50, 0],
  [0, 50, 50, 50, 0, 50, 50, 50, 0, 50, 0],
  [0, 50, 0, 50, 0, 50, 0, 0, 0, 50, 0],
  [0, 50, 0, 50, 0, 50, 50, 50, 0, 50, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const init = async () => {
  try {
    const display = await DisplayController();
    await display.show(matrixToArray(matrix));
  } catch (e) {
    console.error(e);
  }
};

init();
