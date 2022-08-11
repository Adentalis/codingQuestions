/* task https://leetcode.com/problems/jump-game-ii/

Given an array of non-negative integers nums, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Your goal is to reach the last index in the minimum number of jumps.

You can assume that you can always reach the last index.

*/

let nums = [1, 2, 1, 1, 1];
let res = 0;

let bestJumpRes = 0;
let bestJumpI = 0;

if (nums.length === 1) {
  return 0;
}

for (let i = 0; i < nums.length; i++) {
  if (bestJumpI > 1) {
    bestJumpI--;
    bestJumpRes = 0;
    continue;
  }
  res++;

  let currentJump = nums[i];

  if (i + currentJump >= nums.length - 1) {
    break;
  }

  for (let j = 1; j <= currentJump; j++) {
    let a = nums[i + j] - (nums[i] - j);
    if (a > bestJumpRes) {
      bestJumpRes = a;
      bestJumpI = j;
    }
  }
}
console.log(res);

/*
Time Complexity : O(n),   Space Complexity: O(1)**
var jump = function(nums) {
    var jump = 0;
    var prev = 0;
    var max = 0;
    for (var i = 0; i < nums.length - 1; i++) {
        // Keep track of the maximum jump
        max = Math.max(max, i + nums[i]);
        // When we get to the index where we had our previous maximum jump, we increase our jump...
        if (i === prev) {
            jump++;
            prev = max;
        }
    }
    return jump;
};
*/
