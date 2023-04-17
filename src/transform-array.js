const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */

const commands = [
  '--double-next', '--double-prev',  '--discard-next',  '--discard-prev'
]

function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let result = []
  
  for (let i =0; i < arr.length; i++)

    if (arr[i] === '--discard-next' ) {
    //  arr.splice(i, i+1)
     if( i < arr.length - 1) i++
    }

    else if (arr[i] === '--discard-prev') {
      // arr.splice(i, i-1)
      if (i > 0  && arr[i-2] !== '--discard-next') result.pop()
    }

    else if (arr[i] === '--double-next' ) {
    //  arr[i] === arr[i+1]
    if( i < arr.length - 1) result.push(arr[i+1])
    }

    else if ( arr[i] === '--double-prev') {
      // arr[i] === arr[i-1]
     if ( i > 0 && arr[i-2] !== '--discard-next') result.push(result[i-1])
    } else if (!commands.includes(arr[i])) {
      result.push(arr[i])
    }


    return result
  }



module.exports = {
  transform
};
