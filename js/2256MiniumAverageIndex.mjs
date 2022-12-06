import { lst, log } from './util.mjs';

/**
 * @param {number[]} numbers
 * @return {number}
 */
var log = () => {};
var minimumAverageDifference = function (numbers) {
  let sum = numbers.reduce((a, c) => a + c, 0);
  let cSum = 0;
  const m = new Map();
  function getAverageDifference(index) {
    /* this function uses closure, it cannot be separated from outer function, because it is modifying the values of outer function*/
    // console.log(lst);
    log(`cSum = ${cSum}, sum = ${sum} index = ${index}`);
    const leftElements = parseInt(index) + 1;
    const rightElements = numbers.length - parseInt(index) - 1;
    let leftAverage = 0,
      rightAverage = 0;
    // console.log('type of index = ', typeof index, numbers[index]);
    if (leftElements > 0) {
      cSum = cSum + numbers[index];
      log(`new cSum = ${cSum} and leftElements = ${leftElements}`);
      leftAverage = parseInt(cSum / leftElements);
    }
    if (rightElements > 0) {
      sum -= numbers[index];
      rightAverage = parseInt(sum / rightElements);
    }
    const diff = Math.abs(leftAverage - rightAverage);
    // console.log(
    //   `for index=${index} left average = ${leftAverage} and rightAverage = ${rightAverage} and diff = ${diff}`,
    // );
    return diff;
  }

  for (let i in numbers) {
    m.set(i, getAverageDifference(i));
  }
  // console.log('map is', m);
  return [...m].sort((a, b) => a[1] - b[1])[0][0];
};
let x = [2, 5, 3, 9, 5, 3];
console.log('minimum average index is ', minimumAverageDifference(x));
