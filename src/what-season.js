const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  let month = date.getMonth();
  if (date instanceof Date == false) throw new Error("Invalid date!")
   console.log(month)
  if (month == 0 || month == 1 || month == 11) {
    return 'winter'
  }
  else if (month >= 2 && month < 5) {
    return 'spring'
  }
  else if (month >= 5 && month < 8) {
    return 'summer'
  }
  else {
    return 'autumn'
  }
}

module.exports = {
  getSeason
};
