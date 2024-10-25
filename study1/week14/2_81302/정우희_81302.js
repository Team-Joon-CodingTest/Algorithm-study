function solution(places) {
  // P 사람 O 빈자리 X 파티션
  let answer = [];
  for (const x of places) {
    answer.push(check(x));
  }
  return answer;
}

function check(arr) {
  let arr1 = arr.map((e) => e.split(''));
  let x = [1, 0, -1, 0];
  let y = [0, -1, 0, 1];

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      // P일 경우
      if (arr1[i][j] === 'P') {
        for (let k = 0; k < 4; k++) {
          if (
            i + x[k] >= 0 &&
            j + y[k] >= 0 &&
            i + x[k] < 5 &&
            j + y[k] < 5 &&
            arr1[i + x[k]][j + y[k]] === 'P'
          ) {
            // 주변이 P라면 => 0 바로 반환
            return 0;
          }
        }
      }
      // O 일경우
      if (arr1[i][j] === 'O') {
        let count = 0;
        // 주변에 P가 2개 이상이면 바로 0 반환
        for (let k = 0; k < 4; k++) {
          if (
            i + x[k] >= 0 &&
            j + y[k] >= 0 &&
            i + x[k] < 5 &&
            j + y[k] < 5 &&
            arr1[i + x[k]][j + y[k]] === 'P'
          ) {
            count++;
          }
          if (count > 1) {
            return 0;
          }
        }
      }
    }
  }
  return 1;
}
