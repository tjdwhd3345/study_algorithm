function solution(begin, target, words) {
  if (!words.includes(target)) return 0;

  var answer = 0;
  const queue = [];
  const visited = [];

  queue.push([begin, answer]); // 시작 단어 queue 에 push

  while (queue.length) {
    let [word, cnt] = queue.shift(); // queue에서 꺼낸 단어
    if (word === target) return cnt;
    // 꺼낸 단어가 words 배열에서 한단어만 다른 단어를 queue 에 삽입하고 answer++
    for (let i = 0; i < words.length; i++) {
      if (visited.includes(words[i])) continue; // 이전에 방문한 적 있으면 pass
      // -> 이전에 방문한 적 있다는 것은 단계 count 됐다는 것.
      // 한글자 씩 비교
      let diffCount = 0;
      for (let j = 0; j < words[i].length; j++) {
        if (word[j] !== words[i][j]) diffCount++;
      }
      // 한글자만 다르다면 queue에 추가해서 다음에 탐색함
      // 이때 카운트는 몇 번의 단계를 거쳐서 이단어에 도달했는지 기억함.
      if (diffCount === 1) {
        queue.push([words[i], ++cnt]);
        visited.push(words[i]);
      }
    }
  }
  return answer;
}

solution('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']);
