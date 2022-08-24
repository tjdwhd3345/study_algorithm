const fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim();
let input = fs.readFileSync('backjoon/example.txt').toString().trim();
input = parseInt(input);
let answer = 1;
/**
 * 그룹을 나눠서 본다
 *  [1/1] // 홀수
 *  [1/2, 2/1]  // 짝수
 *  [3/1, 2/2, 1/3] // 홀수
 *  [1/4, 2/3, 3/2, 4/1]  // 짝수
 *  [5/1, 4/2, 3/3, 2/4, 1/5] // 홀수
 *  [1/6, 2/5, 3/4, 4/3, 5/2, 6/1] // 홀수
 */

let value = 1;
while (true) {
  input -= value;
  if (input <= 0) {
    input += value;
    break;
  }
  value++;
}
if (value % 2 === 0) {
  // 짝수
  answer = `${input}/${value - input + 1}`;
} else {
  // 홀수
  answer = `${value - input + 1}/${input}`;
}
console.log(answer);
