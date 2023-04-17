const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  let counter = 1;
  let currentDigit = str[0]
  for (let i = 1; i <= str.length; i++) {
    if(str[i] === currentDigit) {
      counter += 1;
    }

    else {
      result += (counter > 1 ? counter : '') + currentDigit;
      counter = 1;
      currentDigit = str[i];
    }
  }
  return result
}

module.exports = {
  encodeLine
};
