function solution(record) {
  let answer = [];
  const recordList = record.reduce((acc, cur, i) => {
    let arr = cur.split(' ');
    let obj = {
      op: arr[0],
      uid: arr[1],
      nickname: arr[2] || '',
    };
    // console.log(obj);
    acc.push(obj);
    return acc;
  }, []);
  // console.log(recordList);
  let userInfo = {};
  const ENTER_MESSAGE = '님이 들어왔습니다.';
  const LEAVE_MESSAGE = '님이 나갔습니다.';
  // userInfo 셋.
  for (var item of recordList) {
    // console.log(item);
    if (item.op !== 'Leave') {
      userInfo[item.uid] = item.nickname;
    }
  }
  // console.log('userInfo: ', userInfo);
  const result = recordList
    .filter((v) => {
      return v.op !== 'Change';
    })
    .map((v) => {
      if (v.op === 'Enter') return userInfo[v.uid] + ENTER_MESSAGE;
      if (v.op === 'Leave') return userInfo[v.uid] + LEAVE_MESSAGE;
    });
  // console.log(result);
  return result;
}
