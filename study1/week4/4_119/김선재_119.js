/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  var res = [];

  for (let i = 0; i <= rowIndex; i++) {
    // 각 행의 첫 번째 요소는 항상 1
    res.unshift(1);

    for (let j = 1; j < i; j++) {
      res[j] += res[j + 1];
    }
  }
  return res;
};
