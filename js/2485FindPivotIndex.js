/*
1 -> 1 options = 1 : 1={(1)1=1(1)} checks = [1] biggest check = 1
checks = 1(===)
pivotMap[1]=[1,[1,null,null]]

2 -> -1
here last check returned equality so we can start with next bigger check, i.e. 2
2 = no{(1+2)=3 [>] 2=(2)},
first check return > we can return -1, and store checks
checks = [2(>)]
pivotMap[2]= [-1,[null,2,null]]

3 -> -1
start with last biggest check that returned >, 2,
2 = {(1 + 2)3 < 5(2 + 3)} ==> No
3=no{(1 + 2 + 3)6 > 3 (3)} checks = [2,3]
checks = [2(<),3(>)]
pivotMap[3]=[-1,[null,3,2]]

4 -> -1
start with last biggest check = 3, (note 3 returned >)
3 = no{(1+2+3)=6 [<] 7=(3+4)},
biggest check returned less than, so moving ahead checking for 3+1
4 = no{(1+2+3+4)=10 [>] 4=(4)}
so we got one less than and one greater than thus we can safely return -1;
checks = [3(<),4(>)]
pivotMap = [-1,[null,4,3]]

5 -> -1
start with last biggest check = 4, template = {() = [] = ()}
4 =  {(1+2+3+4)=10 [>] 9=(4+5)} ==> No
|| one point can be noted since biggest check returned greater than, there is no need to have next check
* checks = [4(>)]
pivotMap = [-1,[null,4,null]]

6 -> -1
start with biggest check that returned >, here biggest check should be 4, since it returned >
4 = {(1+2+3+4)=10 [<] = 15(4+5+6)} ==> No
biggest check returned <, so we can have next check
5 = {(1+2+3+4+5)=15 [>] = 11(5+6)} ==> No
so we got two opposite checks,
* checks = [4(<),5(>)]

7 -> -1
start with biggest check that returned > = 5,
5 = {(1+2+3+4+5)=15 [<] = 18(5+6+7)} ==> No
biggest check returned <, so we can have next check
6 = {(1+2+3+4+5+6)=21 [>] = 13(6+7)} ==> No
so we got two opposite checks,
* checks = [5(<),6(>)]

8 -> 6
start with biggest check that returned > = 6,
6 = {(1+2+3+4+5+6)=21 [===] = 21(6+7+8)} ==> YES
biggest check returned ===, so we can return that check value = 6
* checks = [6(===)]

9 -> -1
here last check returned equality so we can start with next bigger check, i.e. 7
NOT USED ==> start with biggest check that returned > = 6,
7 = {(1+2+3+4+5+6+7)=28 [<] = 24(7+8+9)} ==> No
biggest check returned >, we can return -1, no need to have next check
* checks = [7(>)]

10 -> -1
start with biggest check that returned > = 7,
7 = {(1+2+3+4+5+6+7)=28 [<] = 34(7+8+9+10)} ==> No
biggest check returned <, so we can have next check
8 = {(1+2+3+4+5+6+7+8)=36 [>] = 27(8+9+10)} ==> No
so we got two opposite checks, we can return -1
* checks = [7(<),8(>)]

11 -> -1
start with biggest check that returned > = 8,
8 = {(1+2+3+4+5+6+7+8)=36 [<] = 38(8+9+10+11)} ==> No
biggest check returned <, so we can have next check
9 = {(1+2+3+4+5+6+7+8+9)=45 [>] = 30(9+10+11)} ==> No
so we got two opposite checks, we can return -1
* checks = [8(<),9(>)]

12 -> -1
start with biggest check that returned > = 9,
9 = {(1+2+3+4+5+6+7+8+9)=45 [>] = 42(9+10+11+12)} ==> No
NOT USED ==> biggest check returned <, so we can have next check
biggest check returned >, we can return -1, no need to have next check
NOT USED ==> 8 = {(1+2+3+4+5+6+7+8)=36 [>] = 27(8+9+10)} ==> No
NOT USED ==> so we got two opposite checks, we can return -1
* checks = [9(>)]

13 -> -1
start with biggest check that returned > = 9,
9 = {(1+2+3+4+5+6+7+8+9)=45 [<] = 55(9+10+11+12+13)} ==> No
biggest check returned <, so we can have next check
NOT USED ==> biggest check returned >, we can return -1, no need to have next check
10 = {(1+2+3+4+5+6+7+8+9+10)=55 [>] = 46(10+11+12+13)} ==> No
NOT USED ==> so we got two opposite checks, we can return -1
* checks = [9(<), 10(>)]

14 -> -1
start with biggest check that returned > = 10,
10 = {(1+2+3+4+5+6+7+8+9+10)=55 [<] = 60(10+11+12+13+14)} ==> No
biggest check returned <, so we can have next check
NOT USED ==> biggest check returned >, we can return -1, no need to have next check
11 = {(1+2+3+4+5+6+7+8+9+10+11)=66 [>] = 50(11+12+13+14)} ==> No
so we got two opposite checks, we can return -1
* checks = [10(<), 11(>)]

15 -> -1
start with biggest check that returned > = 11,
11 = {(1+2+3+4+5+6+7+8+9+10+11)=66 [>] = 65(11+12+13+14+15)} ==> No
NOT USED ==> biggest check returned <, so we can have next check
biggest check returned >, we can return -1, no need to have next check
NOT USED ==> 11 = {(1+2+3+4+5+6+7+8+9+10+11)=66 [>] = 50(11+12+13+14)} ==> No
NOT USED ==> so we got two opposite checks, we can return -1
* checks = [11(>)]

16
start with biggest check that returned > = 11,
11 = {(1+2+3+4+5+6+7+8+9+10+11)=66 [<] = 81(11+12+13+14+15+16)} ==> No
biggest check returned <, so we can have next check
NOT USED ==> biggest check returned >, we can return -1, no need to have next check
12 = {(1+2+3+4+5+6+7+8+9+10+11+12)=78 [>] = 70(12+13+14+15+16)} ==> No
so we got two opposite checks, we can return -1
* checks = [11(<), 12(>)]

Algorithm:
get checks for n - 1 [equal, greater than]
if [equal to, then currentCheck = check+1, else
if > , then currentCheck = check

test if currentCheck is pivot
if pivot return pivot
else if	we get >,
  can return -1, no need to have further checks
	store this check for the n i.e n=[-1, [null,currentCheck]]
	else if we get <
	store this check for the n i.e n=[-1, [null,null, currentCheck]]
	check further with currentCheck=currentCheck+1;
	it will return >
	now we can return -1,
	store this check for the n i.e n=[-1, [null,newCurrentCheck]]

notes: consider start from last biggest check that returned "<" for example, we biggest check for 4 was 3, so for 5 we start with 3. and proceed till we find two opposite inequality meaning one greater than and one less than, for example here 10>9 and 6<12
*/

function findPivot(n) {
  const leftSumMap = {
    1: 1,
  };
  function getRightSum(pivot, number) {
    let sum = 0;
    for (let i = pivot; i <= number; i++) {
      sum += i;
    }
    return sum;
  }
  function getLeftSum(pivot) {
    console.log('getting left sum for pivot =', pivot);
    console.log(leftSumMap);
    leftSumMap[pivot] = leftSumMap[pivot] || pivot + leftSumMap[pivot - 1];
    console.log('returning left', leftSumMap[pivot]);
    return leftSumMap[pivot];
  }
  function getNextCheckFromPreviousChecks(previousChecks) {
    // let check;
    const [equality, greaterThan, lessThan] = previousChecks;
    const check = equality ? equality + 1 : greaterThan || lessThan + 1;
    console.log('we should check pivot at', check, previousChecks);
    return check;
  }
  function getPivotAndChecks(i) {
    console.log('for i = ', i);
    let pivotChecks = [null, null, null]; // has format of [equality,greaterThan,lessThan]
    const [check1, checks] = pivotMap[i - 1];
    const check = getNextCheckFromPreviousChecks(checks);
    let left = getLeftSum(check);
    let right = getRightSum(check, i);
    console.log('sum', left, right);
    if (left === right) {
      pivotMap[i] = [check, [check, null, null]];
    } else if (left > right) {
      pivotMap[i] = [-1, [null, check, null]];
    } else {
      pivotMap[i] = [-1, [null, check + 1, check]];
    }
    console.log('pivotMap', i, pivotMap[i][1]);
  }
  const pivotMap = { 1: [1, [1, null, null]] };
  for (let i = 2; i <= n; i++) {
    getPivotAndChecks(i);
  }
  return pivotMap[n][0];
}
console.log('pivot map is', findPivot(8));


/* Note there is a very simple solution for this
based on this approach
function pivotIndex(nums: number[]): number {
    // const runningSum = (a)=>{
    //     if(!a.length) return [];
    //     const rsum = [a[0]];
    //     for(let i = 1; i < a.length; i++){
    //         rsum[i] = rsum[i - 1] + a[i];
    //     }
    //     return rsum;
    // }
    const fsum = [0];
    const revsum = [];
    revsum[nums.length - 1] = 0;
    for (let i = 1; i < nums.length ; i++){
            fsum[i] = fsum[i - 1] + nums[i - 1];
            revsum[nums.length - i - 1] = revsum[nums.length - i] + nums[nums.length - i];
    }
    for (let i = 0; i < nums.length; i++){
        if(fsum[i]===revsum[i])
            return i;

    }
    return -1;
};


*/