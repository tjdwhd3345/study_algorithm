const fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(v => parseInt(v));
let input = fs
  .readFileSync('backjoon/example.txt')
  .toString()
  .trim()
  .split(' ')
  .map((v) => parseInt(v));
console.time('duration');
const [up, down, height] = input;
let answer = 1; // day
// 시간초과
/* let current = 0;
while (true) {
  current += up;
  if (current < height) {
    current -= down;
  } else {
    console.log(answer);
    break;
  }
  answer++;
} */
/**
 * height = (up - down) * answer + down
 * 낮에 올라갔다가 밤에 내려오는데, 만약 낮에 목표지점에 도달하면 안내려옴.
 * 그래서 dowd을 한번 더해주는 것.
 * height - down = (up - down) * answer
 * (height - down) / (up - down) = answer
 */
console.log(Math.ceil((height - down) / (up - down)));

console.timeEnd('duration');
