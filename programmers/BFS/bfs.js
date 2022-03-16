// (function () {
const solution = (arr) => {
  const answer = 'ABCDEFGHIJKLMNO';
  /** BFS: 너비 우선 탐색
   *           A
   *        /    \
   *      B       C
   *    /  \    /  \
   *   D   E   F   G
   *  /\  /\  /\  /\
   * H I J K L M N O
   * A-B-C-D-E-F-G-H-I-J-K-L-M-N-O
   */
  const obj = arr.reduce((acc, cur) => {
    acc[cur[0]] = cur[1];
    return { ...acc };
  }, {});
  // console.log(obj);
  // queue 를 이용해서 순서대로 출력해보자
  const queue = [];
  const visited = [];
  queue.push(['A', obj['A']]); // start node is 'A'
  while (queue.length) {
    const [node, link] = queue.shift();
    if (!visited.includes(node)) visited.push(node);

    const linkedNodes = link.split('');
    for (let i = 0; i < linkedNodes.length; i++) {
      if (visited.filter((v) => v[0] === linkedNodes[i]).length > 0) continue;
      queue.push([linkedNodes[i], obj[linkedNodes[i]]]);
    }
  }
  console.log(visited);
  console.log(visited.join('') === answer);
};
// ['노드', '연결된 노드']
const bfsArr = [
  ['B', 'ADE'],
  ['F', 'CLM'],
  ['A', 'BC'],
  ['L', 'F'],
  ['G', 'CNO'],
  ['C', 'AFG'],
  ['D', 'BHI'],
  ['I', 'D'],
  ['J', 'E'],
  ['K', 'E'],
  ['E', 'BJK'],
  ['N', 'G'],
  ['O', 'G'],
  ['M', 'F'],
  ['H', 'D'],
];
solution(bfsArr);
// })();
