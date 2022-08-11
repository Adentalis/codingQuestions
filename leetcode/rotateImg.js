/* task https://leetcode.com/problems/rotate-image/
    You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
*/
let matrix = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];

let res = [];
let dummy = JSON.parse(JSON.stringify(matrix));

//console.log(matrix.flat());

for (let i = 0; i < matrix.length; i++) {
  let counter = 0;
  for (let j = matrix.length - 1; j >= 0; j--) {
    console.log(j, i, counter);
    matrix[i][counter] = dummy[j][i];
    counter++;
  }
}

console.log(matrix);

/*
j i - i x  -- x = 
2 0 - 0 0
1 0 - 0 1
0 0 - 0 2
2 1 - 1 0
1 1 - 1 1
0 1 - 1 2
2 2 - 2 0
1 2 - 2 1
0 2 - 2 2

*/
