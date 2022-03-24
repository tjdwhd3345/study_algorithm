function solution(lottos, win_nums) {
  var answer = [7, 1];
  const zero = lottos.filter((lotto) => lotto === 0).length;
  if (zero === 6) return [1, 6];
  // 1등번호에 로또번호가 있으면 7등에서 하나씩 상승 => 최고
  // 1등번호에 로또번호가 없으면 1등에서 하나씩 하락 => 최저
  for (let i = 0; i < win_nums.length; i++) {
    if (lottos[i] === 0) continue;
    if (win_nums.includes(lottos[i])) answer[0]--;
    if (!win_nums.includes(lottos[i])) answer[1]++;
  }
  answer[0] -= zero;
  answer[1] += zero;
  if (answer[0] === 7) answer[0] = 6;
  if (answer[1] === 7) answer[1] = 6;
  return answer;
}
const [lottos, win_nums, answer] = [
  [44, 1, 0, 0, 31, 25],
  [31, 10, 45, 1, 6, 19],
  [3, 5],
];
solution(lottos, win_nums);
