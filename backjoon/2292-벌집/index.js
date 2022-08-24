const fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim();
let input = fs.readFileSync('backjoon/example.txt').toString().trim();
let answer = 1;
/** 육각형 주변을 가득 채울 때마다 증가하는 수는 다음과 같다
 * 1 -> 7(+6) -> 19(+12) -> 37(+18) -> 62(+24) ...
 * 즉, 1부터 한바퀴 가득차면 6n 씩 증가함.
 * 결과적으로 목표 숫자가
 * 2~7 = 1+1
 * 8~19 = 1+1+1
 * 20~37 = 1+1+1+1 이 된다.
 */
let sum = 1;
while (sum < input) {
  sum += 6 * answer;
  answer++;
}
console.log(answer);
