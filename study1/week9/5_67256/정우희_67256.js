// 어려움..
function solution(numbers, hand) {
  let answer = '';
  let leftHand = [3, 0]; // 왼손 초기 위치
  let rightHand = [3, 2]; // 오른손 초기 위치

  const getDistance = (a, b) => {
    // 거리 계산 함수
    return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
  };

  const keypad = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    '*': [3, 0],
    0: [3, 1],
    '#': [3, 2],
  };

  for (let num of numbers) {
    if (num === 1 || num === 4 || num === 7) {
      // 왼손으로 입력
      answer += 'L';
      leftHand = keypad[num];
    } else if (num === 3 || num === 6 || num === 9) {
      // 오른손으로 입력
      answer += 'R';
      rightHand = keypad[num];
    } else {
      // 가운데 열의 숫자일 경우
      const leftDistance = getDistance(leftHand, keypad[num]);
      const rightDistance = getDistance(rightHand, keypad[num]);

      if (
        leftDistance < rightDistance ||
        (leftDistance === rightDistance && hand === 'left')
      ) {
        answer += 'L';
        leftHand = keypad[num];
      } else {
        answer += 'R';
        rightHand = keypad[num];
      }
    }
  }

  return answer;
}
