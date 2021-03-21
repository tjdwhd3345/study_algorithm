function solution(arr) {
  var answer = [];

  for (var idx in arr) {
    if (idx == 0) {
      answer.push(arr[idx]);
      continue;
    }
    if (arr[idx] === arr[idx - 1]) continue;
    answer.push(arr[idx]);
  }
  return answer;
}
