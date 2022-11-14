const fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs
  .readFileSync('backjoon/example.txt')
  .toString()
  .trim()
  .split('\n')
  .map((v) => parseInt(v));
console.time('duration');
const answer = Array(31).fill(0);
// console.log({ input, answer });
for (let i = 0; i < input.length; i++) {
  answer[input[i]] = 1;
}
for (let i = 1; i < answer.length; i++) {
  if (answer[i] !== 0) continue;
  console.log(i);
}

console.timeEnd('duration');
