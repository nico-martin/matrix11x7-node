const matrix11x7 = require("../index");
const { wait } = require("../src/helpers");

const matrix = {
  on: [
    [200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200],
    [200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200],
    [200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200],
    [200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200],
    [200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200],
    [200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200],
    [200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200],
  ],
  off: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
};

const init = async () => {
  try {
    const instance = await matrix11x7();
    setInterval(async () => {
      instance.basicMatrix(matrix.on);
      await wait(200);
      instance.basicMatrix(matrix.off);
      await wait(200);
      instance.basicMatrix(matrix.on);
      await wait(200);
      instance.basicMatrix(matrix.off);
      await wait(200);
      instance.basicMatrix(matrix.on);
      await wait(200);
      instance.basicMatrix(matrix.off);
      await wait(400);

      instance.basicMatrix(matrix.on);
      await wait(400);
      instance.basicMatrix(matrix.off);
      await wait(300);
      instance.basicMatrix(matrix.on);
      await wait(400);
      instance.basicMatrix(matrix.off);
      await wait(300);
      instance.basicMatrix(matrix.on);
      await wait(400);
      instance.basicMatrix(matrix.off);
      await wait(300);

      instance.basicMatrix(matrix.on);
      await wait(200);
      instance.basicMatrix(matrix.off);
      await wait(200);
      instance.basicMatrix(matrix.on);
      await wait(200);
      instance.basicMatrix(matrix.off);
      await wait(200);
      instance.basicMatrix(matrix.on);
      await wait(200);
      instance.basicMatrix(matrix.off);
    }, 6000);
  } catch (e) {
    console.error(e);
  }
};

init();
