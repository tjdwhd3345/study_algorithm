function solution(tickets) {
  var answer = [];
  tickets.sort(); // 오름차순으로 정렬
  // console.log(tickets);
  const track = []; // 여행 경로
  const visited = []; // 오름차순 된 인덱스 별 티켓 사용여부
  const flightCount = tickets.length; // 총 여행횟수

  const dfs = (start, count) => {
    track.push(start);
    // 여행횟수가 비행카운트랑 동일하면 재귀 반환
    if (count === flightCount) {
      answer = track;
      return true;
    }
    // 반복문에서 현재 출발지인 티켓과 방문하지않은 곳의 목적지를 새로운 출발지로 지정하여 재귀호출
    // 이때 여행횟수 +1
    for (let i = 0; i < flightCount; i++) {
      if (tickets[i][0] === start && !visited[i]) {
        visited[i] = true;
        if (dfs(tickets[i][1], count + 1)) return true;
        visited[i] = false;
      }
    }
    track.pop();
    return false;
  };
  // 출발지는 인천 고정
  dfs('ICN', 0);

  return answer;
}

const tickets = [
  ['ICN', 'AOO'],
  ['ICN', 'AOO'],
  ['AOO', 'ICN'],
  ['AOO', 'COO'],
];
const answer = ['ICN', 'AOO', 'ICN', 'AOO', 'COO'];
const my = solution(tickets);
console.log(answer === my, my);
