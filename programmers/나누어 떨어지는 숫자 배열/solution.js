function solution(arr, divisor) {
  var answer = arr
    .reduce((acc, cur) => {
      if (cur % divisor === 0) acc.push(cur);
      return acc;
    }, [])
    .sort((a, b) => a - b);
  return answer.length === 0 ? [-1] : answer;
}
