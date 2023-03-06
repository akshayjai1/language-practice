/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {}

/*
you are given two strings, word1 and word2, we have to return minimum number of operations required to convert word1 to word2.a
we have three operations at our disposal. addition,removal, replacement
by watching youtube video, it appears, it is a 2D dynamic programming problem,
if there is an empty string,, converting it to empty string takes 0 operation minimum
if w1='a',w2='',converting w1 to w2 takes 1 removal
if w1='', w2 ='a', => converting w1 to w2 takes 1 operation = addition.

if w1='abc',w2='',converting w1 to w2 takes 3 operations = 3 removals
if w1='', w2 ='abc', => converting w1 to w2 takes 3 operations = 3 additions.

Thus if one string is empty, minimum operations = length of another string

we can solve this problem, by dividing it into smaller problems, through recursion, and caching with recursion = dynamic programming

we can build the solution, by dynamically progressing from smaller to bigger problem.

building upon 2 examples above.

if w1=ab, w2=c,in first operation, we can either add a, or replace c with a=> 1 operation.
and w2 becomes either ac, or a, . we need to add one more operation, for making ab, either replace b with c or adding b.
thus total 2 operations. so depending on which path has least cost, based on bottom up solution, we will get the optimized answer.

so how do we create solution approach.


 */
