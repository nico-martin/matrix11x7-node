const DisplayController = require("./src/display");
const { matrixToArray } = require("./src/matrix");
const fontScroller = require("./src/scrolling");

module.exports = matrix11x7 = async () => {
  const display = await DisplayController();
  console.log("display", display);
  return {
    basicMatrix: async (matrix) => {
      display.show(matrixToArray(matrix));
    },
    scrollText: async (text, config = {}) => {
      fontScroller(display, text, config);
    },
  };
};
