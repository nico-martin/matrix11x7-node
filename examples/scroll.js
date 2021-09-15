const DisplayController = require("../src/display");
const fontScroller = require("../src/scrolling");

const init = async () => {
  try {
    const display = await DisplayController();
    fontScroller(display, "Hello World!", {
      intensity: 80,
    });
  } catch (e) {
    console.error(e);
  }
};

init();
