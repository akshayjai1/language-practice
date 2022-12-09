/* given an array and a sum, find out if the there is any subset of that array whose sum is equal to given sum. write a recursive solution.
return the total count of subset and print the subset
*/
var a = [2, 4, 9, 13, 6, 3],
  sum = 22;

function doesArrayHasSubsetWithSum(ar, sum) {
  const h = (s, i, arr = []) => {
    if (i === 0) {
      if (s === 0) {
        console.log(`subset with sum = ${sum} is `, arr);
        return 1;
      }
      return 0;
    }
    if (s < 0) {
      return 0;
    }
    return (
      h(s, i - 1,[...arr]) + h( s - ar[i - 1], i - 1,[...arr, ar[i - 1]],)
    );
  };
  return h(sum, ar.length);
}
var r = doesArrayHasSubsetWithSum(a, sum);
console.log('total is ', r);
