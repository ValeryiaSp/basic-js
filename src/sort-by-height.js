const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  
  let minusOneIndexes = [];
  let otherElements = [];

  arr.forEach(function(item, index) {
    item === -1 ? minusOneIndexes.push(index) : otherElements.push(item)
  })

  otherElements.sort((a,b) => a-b)

  minusOneIndexes.forEach((index) => {
    otherElements.splice(index, 0, -1)
  })

  return otherElements
}

module.exports = {
  sortByHeight
};
