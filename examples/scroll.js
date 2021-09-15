const DisplayController = require("../src/display");
const fontScroller = require("../src/scrolling");
const font = require("../src/fonts/font5x7");

const init = async () => {
  try {
    const display = await DisplayController();
    fontScroller(display, "Hello World", {
      font,
      speed: 100,
    });
  } catch (e) {
    console.error(e);
  }
};

init();
