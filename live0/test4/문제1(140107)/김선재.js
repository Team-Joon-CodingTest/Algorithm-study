function solution(k, d) {
  let coordinate = [];
  let x = 0;
  let y = 0;

  // 원점으로 부터의 거리
  function getDistance(x, y) {
    let width = x - 0;
    let height = y - 0;

    return Math.sqrt(width * width + height * height);
  }

  // 좌표를 저장
  for (let i = 0; i <= d; i += k) {
    for (let j = 0; j <= d; j += k) {
      if (getDistance(i, j) <= d) {
        coordinate.push([i, j]);
      }
    }
  }

  return coordinate.length;
}
