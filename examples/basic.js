const matrix11x7 = require("../index");
const { wait } = require("../src/helpers");

const matrixHeart = [
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
    instance.basicMatrix(matrixHeart);
  } catch (e) {
    console.error(e);
  }
};

init();
