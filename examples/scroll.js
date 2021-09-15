const DisplayController = require("../src/display");
const { matrixToArray } = require("../src/helpers");
const fontToMatrix = require("../src/font");

const matrix = fontToMatrix("Hello World!");
const pixelArray = matrixToArray(matrix).map((l) => (l === 255 ? 50 : 0));

const init = async () => {
  try {
    const display = await DisplayController();
    await display.show(pixelArray);
  } catch (e) {
    console.error(e);
  }
};

init();
