const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
let counter = 0;
let splittedString = s2.split('');
for (let i = 0; i < s1.length; i++) {
  if (splittedString.includes(s1[i])) {
    let indexOfSimilarCharter = splittedString.indexOf(s1[i])
    splittedString.splice(indexOfSimilarCharter, 1)
    counter = counter + 1;
  }
}
return counter;
}

module.exports = {
  getCommonCharacterCount
};
