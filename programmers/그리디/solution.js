function solution() {
  var answer = 0;
  // 체육복 초기화
  const students = Array.from({ length: n }).fill(1);
  for (let i = 0; i < lost.length; i++) students[lost[i] - 1] -= 1;
  for (let i = 0; i < reserve.length; i++) students[reserve[i] - 1] += 1;

  for (let i = 0; i < students.length; i++) {
    if (!students[i]) {
      if (students[i - 1] !== 0 && students[i - 1] > 1) {
        students[i - 1] -= 1;
        students[i] += 1;
      } else if (students[i + 1] !== 0 && students[i + 1] > 1) {
        students[i + 1] -= 1;
        students[i] += 1;
      }
    }
  }
  answer = students.filter((student) => student > 0).length;
  return answer;
}

solution();
