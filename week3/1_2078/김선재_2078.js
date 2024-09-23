/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function (colors) {
  const n = colors.length;

  // 첫 번째와 마지막 원소가 다르면 -> 최대 거리
  if (colors[0] != colors[n - 1]) {
    return n - 1;
  }

  // 앞에서부터 탐색
  let i = 0;
  while (colors[i] == colors[0]) i++;

  // 끝에서부터 탐색
  let j = n - 1;
  while (colors[j] == colors[0]) j--;

  // 최대 거리 계산
  return Math.max(n - i - 1, j);
};
