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
