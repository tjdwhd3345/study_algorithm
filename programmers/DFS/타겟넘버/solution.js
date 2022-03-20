function solution(numbers, target) {
  var answer = 0;
  const current = [];
  let sum = 0;

  const dfs = (idx, sum, signed) => {
    numbers[idx] ? current.push(numbers[idx] * signed) : '';
    console.log(current, sum);
    if (idx === numbers.length) {
      // 자릿수 끝까지 탐색했으면 target 과 비교 후 재귀 반환
      if (sum === target) answer++;
      return;
    }
    // 각 자릿수 별로 +, - 한번씩 연산함.
    dfs(idx + 1, sum + numbers[idx], 1);
    dfs(idx + 1, sum - numbers[idx], -1);
    numbers[idx] ? current.pop() : '';
    console.log('끝');
  };
  dfs(0, 0, 1);

  return answer;
}
