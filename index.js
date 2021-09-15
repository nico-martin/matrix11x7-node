const DisplayController = require("./src/display");
const { matrixToArray } = require("./src/matrix");
const fontScroller = require("./src/scrolling");

const basicMatrix = async (matrix) => {
  try {
    const display = await DisplayController();
    await display.show(matrixToArray(matrix));
  } catch (e) {
    console.error(e);
  }
};

const scrollText = async (text, config = {}) => {
  try {
    const display = await DisplayController();
    fontScroller(display, text, config);
  } catch (e) {
    console.error(e);
  }
};

module.exports = {
  basicMatrix,
  scrollText,
};
