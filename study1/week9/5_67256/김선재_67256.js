// 1. 키패드를 좌표화
// 2. 번호가 1,4,7 일 경우 L++
// 3. 번호가 3,6,9 일 경우 R++
// 4. 번호가 2,5,8,0 인 경우 현재 손의 위치와 번호까지의 거리를 계산
// 거리가 같으면 hand 이용
function solution(numbers, hand) {
  var answer = "";
  const n = numbers.length;
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
    "*": [3, 0],
    0: [3, 1],
    "#": [3, 2],
  };

  // 초기 상태
  let currentL = [3, 0];
  let currentR = [3, 2];

  for (let i = 0; i < n; i++) {
    let num = numbers[i];

    if (num === 1 || num === 4 || num === 7) {
      answer += "L";
      currentL = keypad[num];
    } else if (num === 3 || num === 6 || num === 9) {
      answer += "R";
      currentR = keypad[num];
    }
    // 2 5 8 0
    else {
      let distanceL = getDistance(currentL, keypad[num]);
      let distanceR = getDistance(currentR, keypad[num]);
      if (distanceL > distanceR) {
        answer += "R";
        currentR = keypad[num];
      } else if (distanceL < distanceR) {
        answer += "L";
        currentL = keypad[num];
      } else {
        if (hand === "left") {
          answer += "L";
          currentL = keypad[num];
        } else {
          answer += "R";
          currentR = keypad[num];
        }
      }
    }
  }

  return answer;
}

const getDistance = (a, b) => {
  return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
};
