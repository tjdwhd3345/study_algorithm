function solution(strings, n) {
  var answer = strings.sort((prev, next) => {
    if (prev.charAt(n) < next.charAt(n)) return -1;
    if (prev.charAt(n) > next.charAt(n)) return 1;
    return prev < next ? -1 : 1;
  });
  return answer;
}
