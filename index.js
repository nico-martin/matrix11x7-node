const DisplayController = require("./src/display");
const { matrixToArray } = require("./src/matrix");
const fontScroller = require("./src/scrolling");

module.exports = matrix11x7 = async () => {
  try {
    const display = await DisplayController();
    return {
      basicMatrix: async (matrix, display = null) =>
        await display.show(matrixToArray(matrix)),
      scrollText: async (text, config = {}) =>
        await fontScroller(display, text, config),
    };
  } catch (e) {
    console.error(e);
  }
};
