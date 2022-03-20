function solution(N, number) {
  var answer = 0;
  // N 이 목표숫자와 같다면 한번만 쓰면 되기때문에 1반환
  if (N === number) return 1;
  // 주어진 N 이 최대로 사용될 수 있는 횟수는 8회임.
  // 각 인덱스에 Set 객체를 갖는 길이8 짜리 배열 생성
  const setArr = Array.from(new Array(8), () => new Set());
  /* N이 반복해서 나타낼 수 있는 수를 모두 탐색한다.
   ** 점화식은 f(n) = f(n-1) '사칙' f(n-2) , n반복 이다.
   ** 따라서 반복문을 돌면서
   ** 반복횟수만큼의 숫자들의 사칙연산값으로 number 가 생성됐으면
   ** 해당 반복횟수인 i 반환한다.
   */
  for (let i = 0; i < 8; i++) {
    setArr[i].add(Number(String(N).repeat(i + 1)));
    for (let j = 0; j < i; j++) {
      for (const first of setArr[j]) {
        for (const second of setArr[i - j - 1]) {
          setArr[i].add(first + second);
          setArr[i].add(first - second);
          setArr[i].add(first * second);
          setArr[i].add(first / second);
        }
      }
    }
    if (setArr[i].has(number)) return i + 1;
  }
  // 최솟값이 8보다 크면 -1 반환
  return -1;
}

const [n1, number1, answer1] = [5, 12, 4];
const result1 = solution(n1, number1);
const [n2, number2, answer2] = [2, 11, 3];
// const result2 = solution(n2, number2);
const [n3, number3, answer3] = [8, 53, 5];
// const result3 = solution(n3, number3);
const [n4, number4, answer4] = [5, 31168, -1];
// const result4 = solution(n4, number4);
console.log(result1 === answer1, result1);
// console.log(result2 === answer2, result2);
// console.log(result3 === answer3, result3);
// console.log(result4 === answer4, result4);
