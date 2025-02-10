function solution(n, t, m, p) {
  const totalLength = t * m;
  let temp = '';
  let answer = '';
  for (let i = 0; i < totalLength; i++) {
    let num = i.toString(n);
    temp += num;
  }
  for (let i = 0; i < totalLength; i++) {
    if (i % m === p - 1) {
      answer += temp[i].toUpperCase();
    }
  }

  return answer;
}
console.log(solution(2, 4, 2, 1));
