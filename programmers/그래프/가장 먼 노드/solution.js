function solution(n, edge) {
  var answer = 0;
  // 인접리스트 초기화
  const adjList = Array.from(Array(n), () => []);
  for (let i = 0; i < edge.length; i++) {
    adjList[edge[i][0] - 1].push(edge[i][1] - 1);
    adjList[edge[i][1] - 1].push(edge[i][0] - 1);
  }
  // console.log(adjList);
  const visitedList = [];
  const queueList = [];
  // BFS, 시작노드 삽입
  queueList.push([0, 1]);
  while (queueList.length) {
    let [node, cost] = queueList.shift();
    // 방문한 적 있으면 패스
    if (visitedList[node]) continue;
    // cost 는 현재 노드까지의 간선 수
    visitedList[node] = cost;
    cost++;
    // 현재 노드의 인접노드를 간선수와 함께 큐에 삽입
    for (let i = 0; i < adjList[node].length; i++) {
      // 큐에 삽입할 때 이미 방문한 노드이면 중복삽입안해야 시간초과 안남.
      if (visitedList[adjList[node][i]]) continue;
      queueList.push([adjList[node][i], cost]);
    }
  }
  // console.log(visitedList);
  const max = Math.max(...visitedList);
  answer = visitedList.filter((v) => v === max).length;
  return answer;
}
