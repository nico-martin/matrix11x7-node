const { scrollText } = require("../index");

scrollText("Hello World", {
  speed: 80, // optional - milliseconds between each step
  infinite: true, // optional - wether it should stop after one run or keep running
  font: null, // optional - the font you want to use (see src/fonts/ as an example)
  intensity: 50, // optional - an integer between 0 an 255 (intensity)
});
