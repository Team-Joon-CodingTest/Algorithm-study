function solution(numbers, hand) {
  let answer = '';
  let leftPos = '*'; //초기 위치
  let rightPos = '#'; //초기 위치

  // 키패드 위치
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

  numbers.forEach((num) => {
    if (num === 1 || num === 4 || num === 7) {
      answer += 'L';
      leftPos = num;
    } else if (num === 3 || num === 6 || num === 9) {
      answer += 'R';
      rightPos = num;
    } else {
      const leftDist = getDistance(keypad[leftPos], keypad[num]);
      const rightDist = getDistance(keypad[rightPos], keypad[num]);

      if (leftDist === rightDist) {
        if (hand === 'right') {
          answer += 'R';
          rightPos = num;
        } else {
          answer += 'L';
          leftPos = num;
        }
      } else if (leftDist < rightDist) {
        answer += 'L';
        leftPos = num;
      } else {
        answer += 'R';
        rightPos = num;
      }
    }
  });

  return answer;
}

// 키패드 사이의 위치 구하기
function getDistance(pos1, pos2) {
  return Math.abs(pos1[0] - pos2[0]) + Math.abs(pos1[1] - pos2[1]);
}
