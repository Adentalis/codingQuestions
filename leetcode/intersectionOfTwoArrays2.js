// task https://leetcode.com/problems/intersection-of-two-arrays-ii/

// let a = [4, 9, 5, 4];
// let b = [9, 4, 9, 8, 4];

let a = [1, 2];
let b = [2, 1];
let res = [];

for (let i = 0; i < a.length; i++) {
  if (b.indexOf(a[i]) !== -1) {
    res.push(a[i]);
    b.splice(b.indexOf(a[i]), 1);
    a.splice(i, 1);
    i--;
  }
}

console.log(res);

/*
Runtime: 65 ms, faster than 96.63% of JavaScript online submissions for Intersection of Two Arrays II.
Memory Usage: 42.7 MB, less than 74.00% of JavaScript online submissions for Intersection of Two Arrays II.
*/

// let max = 0;
// for (let i = 0; i < prices.length - 1; i++) {
//   for (let j = i + 1; j < prices.length; j++) {
//     if (prices[j] - prices[i] > max) {
//       max = prices[j] - prices[i];
//     }
//   }
// }

// console.log(max);
let prices = [7, 1, 5, 3, 6, 4];
let left = 0; // Buy
let right = 1; // sell
let max_profit = 0;

let i = 0;
while (right < prices.length) {
  i++;
  console.log("loop counter ", i);
  if (prices[left] < prices[right]) {
    let profit = prices[right] - prices[left]; // our current profit
    max_profit = Math.max(max_profit, profit);
  } else {
    left = right;
  }
  right++;
}
console.log(max_profit);
