const DisplayController = require("../src/display");
const fontScroller = require("../src/scrolling");
const font = require("../src/fonts/font3x5");

const init = async () => {
  try {
    const display = await DisplayController();
    fontScroller(display, "HELLO WORLD!", {
      font,
    });
  } catch (e) {
    console.error(e);
  }
};

init();
