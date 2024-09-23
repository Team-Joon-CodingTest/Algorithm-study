/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  var max = -1; // 최대값 설정

  // 역순으로 배열을 탐색
  for (let i = arr.length - 1; i >= 0; i--) {
    let temp = arr[i]; // 탐색 중인 배열 값을 temp 에 저장

    arr[i] = max; // 배열값을 최대값으로 초기화

    if (temp > max) {
      max = temp;
    }
  }

  return arr;
};
