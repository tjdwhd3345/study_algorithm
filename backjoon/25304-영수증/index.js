const fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('backjoon/example.txt').toString().trim().split('\n');
let answer = '';
const total = parseInt(input[0]);
let sum = 0;
for (let i = 2; i < input.length; i++) {
  const [amount, count] = input[i].split(' ').map((v) => parseInt(v));
  sum += amount * count;
}
answer = total === sum ? 'Yes' : 'No';
console.log(answer);
