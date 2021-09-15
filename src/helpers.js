const matrixToArray = (matrix) => {
  // todo: make sure each row is 10 elements long
  const arr = [];
  matrix.map((row) => row.map((value, i) => i <= 10 && arr.push(value)));
  return arr;
};

const wait = (ms) => new Promise((resolve) => setTimeout(() => resolve(), ms));

module.exports = {
  matrixToArray,
  wait,
};
