const matrix11x7 = require("../index");

const matrix = [
  [0, 0, 0, 0, 50, 0, 50, 0, 0, 0, 0],
  [0, 0, 0, 50, 0, 50, 0, 50, 0, 0, 0],
  [0, 0, 50, 0, 0, 0, 0, 0, 50, 0, 0],
  [0, 0, 50, 0, 0, 0, 0, 0, 50, 0, 0],
  [0, 0, 0, 50, 0, 0, 0, 50, 0, 0, 0],
  [0, 0, 0, 0, 50, 0, 50, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0],
];

const init = async () => {
  try {
    const instance = await matrix11x7();
    console.log("set up", instance);
    instance.basicMatrix(matrix);
  } catch (e) {
    console.error(e);
  }
};

init();
