const { arrayToLength } = require("./helpers");

const fixedMatrixSize = (matrix, height, width) =>
  arrayToLength(matrix, height, []).map((row) => arrayToLength(row, width));

const matrixToArray = (rows, height = 7, width = 11) => {
  const cleanSizeMatrix = fixedMatrixSize(rows, height, width);

  return cleanSizeMatrix.reduce(
    (acc, rows) => [...acc, ...rows.map((value) => value)],
    []
  );
};

const mergeColumns = (matrix1, matrix2) =>
  matrix1.map((row, index) => [...row, ...matrix2[index]]);

const extractColumns = (matrix, begin = 0, end = 1) =>
  matrix.map((row) => row.slice(begin, end));

module.exports = {
  matrixToArray,
  mergeColumns,
  extractColumns,
};
