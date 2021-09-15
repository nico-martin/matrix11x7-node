const DisplayController = require("../src/display");
const fontScroller = require("../src/scrolling");
const font = require("../src/fonts/font5x7smoothed");

const init = async () => {
  try {
    const display = await DisplayController();
    fontScroller(display, "Hello World!", {
      intensity: 80,
      font,
    });
  } catch (e) {
    console.error(e);
  }
};

init();
