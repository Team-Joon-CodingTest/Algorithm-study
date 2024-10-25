var getRow = function (rowIndex) {
  // 첫 번째 행을 초기화, Pascal의 삼각형의 첫 번째 행은 항상 [1]
  let row = [1];

  // 각 행을 계산합니다.
  for (let i = 1; i <= rowIndex; i++) {
    // 새 행을 생성 처음과 마지막 요소는 항상 1
    let newRow = [1];

    // 새 행의 각 요소를 계산 각 요소는 이전 행의 'j-1'번째와 'j'번째 요소의 합
    for (let j = 1; j < i; j++) {
      newRow.push(row[j - 1] + row[j]);
    }

    // 마지막 요소로 1 추가
    newRow.push(1);

    // 새 행을 현재 행으로 설정
    row = newRow;
  }

  return row;
};
