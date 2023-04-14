const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum
  let counter = [];
  let columnCounter = matrix.length;
  for (let i = 0; i < columnCounter; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[j][i] != 0) {
        counter.push(i);
      }
    }
  }
  return sum = counter.reduce(function(previous, current) {previous + current}, 0)
}

module.exports = {
  getMatrixElementsSum
};
