function solution(k, d) {
  var answer = 0;

  let a = Math.floor(d / k);

  for (let i = 0; i <= a * k; i += k) {
    let maxY = parseInt(Math.sqrt(d * d - i * i));
    answer += Math.floor(maxY / k) + 1;
  }
  return answer;
}
