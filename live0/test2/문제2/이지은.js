function solution(a, b, n) {
  var answer = 0;
  let flag = 0;
  while (flag) {
    let na = n % a;
    let bottle = Math.floor(n / a) + n;
    answer += bottle;
    if (bottle < na) {
      flag = 1;
    }
  }
  return answer;
}

console.log(solution(2, 1, 20));
console.log(solution(3, 1, 20));
