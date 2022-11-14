const fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('backjoon/example.txt').toString().trim().split('\n');
console.time('duration');
const [, arr, target] = input;
// console.log({ arr, target });
const answer = arr.split(' ').filter((v) => parseInt(v) === parseInt(target)).length;
console.log(answer);

console.timeEnd('duration');
