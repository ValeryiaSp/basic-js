const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
let arr = email.split('');
let indexOfAt = arr.lastIndexOf('@');
let adress = arr.slice(indexOfAt+1).join('')
return adress
}

module.exports = {
  getEmailDomain
};
