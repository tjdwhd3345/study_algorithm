function solution(numbers) {
  let answer = [];
  const len = numbers.length;

  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      answer.push(numbers[i] + numbers[j]);
    }
  }

  return answer
    .sort((a, b) => a - b)
    .reduce((acc, cur) => {
      acc.indexOf(cur) > -1 ? acc : acc.push(cur);
      return acc;
    }, []);
}
