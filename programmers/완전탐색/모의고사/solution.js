function solution(answers) {
  var answer = [];
  var sobj = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  var score = [0, 0, 0];
  for (var i = 0; i < answers.length; i++) {
    if (answers[i] == sobj[0][i % 5]) score[0]++;
    if (answers[i] == sobj[1][i % 8]) score[1]++;
    if (answers[i] == sobj[2][i % 10]) score[2]++;
  }

  var max = Math.max.apply(null, score);

  for (var i = 0; i < score.length; i++) {
    if (max == score[i]) answer.push(i + 1);
  }

  return answer;
}
