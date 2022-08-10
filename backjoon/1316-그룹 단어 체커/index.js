const fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('backjoon/example.txt').toString().trim().split('\n');
let answer = 0;
for (let i = 1; i <= input[0]; i++) {
  const check = [];
  for (let j = 0; j < input[i].length; j++) {
    if (!check.includes(input[i][j])) {
      check.push(input[i][j]);
    } else {
      if (input[i][j - 1] !== input[i][j]) break;
    }
    if (input[i].length - 1 === j) answer++;
  }
}
console.log(answer);
