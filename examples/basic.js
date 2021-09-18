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
  const instance = await matrix11x7();
  instance.basicMatrix(matrix);
};

init();
