/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function (colors) {
  let maxDist = 0;

  for (let i = 0; i < colors.length; i++) {
    for (let j = i + 1; j < colors.length; j++) {
      // 서로 다른 색상을 가진 경우 거리 계산
      if (colors[i] !== colors[j]) {
        maxDist = Math.max(maxDist, Math.abs(i - j));
      }
    }
  }

  return maxDist;
};
