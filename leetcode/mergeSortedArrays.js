// task: https://leetcode.com/problems/merge-sorted-array/

let a = [1, 2, 3, 4, 5, 10, 100];
let b = [2, 3, 5, 8, 44, 55, 66];

let res = [];
while (a.length !== 0 && b.length !== 0) {
  if (a.length === 0) {
    res.push(b[0]);
    b.splice(0, 1);
  } else if (b.length === 0) {
    res.push(a[0]);
    a.splice(0, 1);
  } else {
    if (a[0] <= b[0]) {
      res.push(a[0]);
      a.splice(0, 1);
    } else {
      res.push(b[0]);
      b.splice(0, 1);
    }
  }
}

console.log(res);
