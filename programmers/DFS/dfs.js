// (function () {
const solution = (arr) => {
  const answer = 'ABDHIEJKCFLMGNO';
  /** DFS: 깊이 우선 탐색
   *           A
   *        /    \
   *      B       C
   *    /  \    /  \
   *   D   E   F   G
   *  /\  /\  /\  /\
   * H I J K L M N O
   * A-B-D-H-I-E-J-K-C-F-L-M-G-N-O
   */
  // 인접리스트 생성
  const obj = arr.reduce((acc, cur) => {
    acc[cur[0]] = cur[1];
    return { ...acc };
  }, {});
  // console.log(obj);

  // 재귀호출을 이용해서 순서대로 출력
  const visited_dfs = [];
  const dfs = (node) => {
    if (!visited_dfs.includes(node)) visited_dfs.push(node);
    const adjNodes = obj[node].split('');
    for (let i = 0; i < adjNodes.length; i++) {
      if (!visited_dfs.includes(adjNodes[i])) dfs(adjNodes[i]);
    }
  };
  // 시작노드
  dfs('A');

  // stack 을 이용해서 순서대로 출력해보자
  const stack = [];
  const visited = [];
  stack.push(['A', obj['A']]);
  while (stack.length) {
    const [node, link] = stack.pop();
    if (!visited.includes(node)) visited.push(node);
    const linkedNodes = link.split('');
    for (let i = linkedNodes.length - 1; i >= 0; i--) {
      if (!visited.includes(linkedNodes[i]))
        stack.push([linkedNodes[i], obj[linkedNodes[i]]]);
    }
  }
  console.log(visited, visited_dfs);
  console.log(visited.join('') === answer, visited_dfs.join('') === answer);
};
// ['노드', '연결된 노드']
const dfsArr = [
  ['A', 'BC'],
  ['B', 'ADE'],
  ['C', 'AFG'],
  ['D', 'BHI'],
  ['E', 'BJK'],
  ['F', 'CLM'],
  ['G', 'CNO'],
  ['H', 'D'],
  ['I', 'D'],
  ['J', 'E'],
  ['K', 'E'],
  ['L', 'F'],
  ['M', 'F'],
  ['N', 'G'],
  ['O', 'G'],
];
solution(dfsArr);
// })();
