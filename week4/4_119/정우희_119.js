var getRow = function (rowIndex) {
  let row = [1]; // 파스칼의 삼각형 첫 번째 행은 항상 [1]

  // 파스칼의 삼각형의 각 행을 계산
  for (let i = 1; i <= rowIndex; i++) {
    // 새로운 행을 위한 임시 배열
    let newRow = [1]; // 모든 행은 1로 시작

    // 이전 행의 각 요소를 순회하면서 새로운 행의 요소를 계산
    for (let j = 1; j < row.length; j++) {
      newRow[j] = row[j - 1] + row[j];
    }

    newRow.push(1); // 모든 행은 1로 끝남
    row = newRow; // 이전 행을 새로운 행으로 갱신
  }

  return row; // 계산된 행을 반환
};
