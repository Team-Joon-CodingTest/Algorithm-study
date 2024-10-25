// 테스트케이스 실패..
function solution(cards1, cards2, goal) {
  let answer = '';

  for (let i = 0; i < goal.length; i++) {
    if (goal[i] === cards1[i]) {
      goal.shift();
      cards1.shift();
    } else if (goal[i] === cards2[i]) {
      goal.shift();
      cards2.shift();
    } else {
      return 'Yes';
    }
  }

  return 'No';
}
