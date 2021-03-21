function solution(next_student) {
  const count = new Array(next_student.length);

  for (let index = 0; index < next_student.length; index++) {
    let next_index = next_student[index];
    let _history = next_index === 0 ? [index + 1] : [index + 1, next_index];
    while (_history.length < next_student.length) {
      // for (; _history.length < next_student.length; ) {
      if (
        next_index === 0 || // 전달할 학생이 없거나
        next_student[next_index - 1] === 0 || // 전달할 학생이 없거나
        next_index - 1 === index || // 다음학생이 최초 본인이거나
        _history.includes(next_student[next_index - 1]) // 이미 회람한 학생이면 break;
      )
        break;
      _history.push(next_student[next_index - 1]);
      // console.log('index:', index, next_student[next_index - 1], _history);

      next_index = next_student[next_index - 1];
    }
    count[index] = _history.length;
  }
  console.log('count:', count);
  return count.lastIndexOf(Math.max.apply(null, count)) + 1;
}

// testcase
const next_student = {
  0: [5, 9, 13, 1, 0, 0, 11, 1, 7, 12, 9, 9, 2], // 3
  1: [6, 10, 8, 5, 8, 10, 5, 1, 6, 7], // 9
  2: [0, 0, 0], // 3
  3: [2, 0, 0, 2], //4
  4: [2, 3, 4, 5, 6, 7, 8, 9, 10, 1], //10
};
for (let item in next_student) {
  solution(next_student[item]);
}

/**
 * 
 * 각 index 학생이 만든 카드가 몇명한테 순회했는지 알아야 한다. 

1. 반복문으로 차례대로 검사
2. 몇명한테 순회했는지 최대인원을 추정할 수 없기 때문에 while 문 사용.
  → 중복 순회가 안되니까 최대인원은 학생수인가? 그러면 for 문 써도 될 텐데..
3. 다음 조건일 때 카운트 중지
  - 다음 차례 학생번호가 0이거나
  - 다음 차례 학생번호가 최초의 카드를 만든 학생번호와 동일하거나
  - 다음 차례 학생번호가 이미 순회했던 번호이면 중지함.
 */
