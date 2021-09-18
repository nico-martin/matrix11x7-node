const matrix11x7 = require("../index");
const { wait } = require("../src/helpers");

const matrix = [
  [0, 0, 0, 0, 50, 0, 50, 0, 0, 0, 0],
  [0, 0, 0, 50, 0, 50, 0, 50, 0, 0, 0],
  [0, 0, 50, 0, 0, 0, 0, 0, 50, 0, 0],
  [0, 0, 50, 0, 0, 0, 0, 0, 50, 0, 0],
  [0, 0, 0, 50, 0, 0, 0, 50, 0, 0, 0],
  [0, 0, 0, 0, 50, 0, 50, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0],
];

const matrixClear = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const init = async () => {
  try {
    const instance = await matrix11x7();
    instance.basicMatrix(matrix);
    await wait(1000);
    instance.basicMatrix(matrixClear);
    await wait(1000);
    instance.basicMatrix(matrix);
    await wait(1000);
    instance.basicMatrix(matrixClear);
    await wait(1000);
  } catch (e) {
    console.error(e);
  }
};

init();
