function solution(priority, location) {
  var answer = 1;
  // console.log("initial priority, location: ", priority,", ", location);
  var _priority = priority.map(function (item, index, arr) {
    return { isLoc: index === location, value: item };
  });
  while (_priority.length > 0) {
    var first = _priority.shift();
    var isPriority = _priority.some(function (item, index, arr) {
      return first.value < item.value; //하나라도 크면 true 반환 후 종료.
    });

    if (isPriority) {
      _priority.push(first);
    } else {
      // console.log("print it! ",first.value);

      if (first.isLoc) {
        return answer;
      } else {
        answer++;
      }
    }
    // console.log("every after 'some'... priority, location: ", _priority,", ", location);
  }
  return answer;
}
