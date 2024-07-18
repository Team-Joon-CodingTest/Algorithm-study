function solution(a, b, n) {
  var answer = 0;

  while (n >= a) {
    let exchange = Math.floor(n / a);
    let bonus = exchange * b;
    answer += bonus;
    n = (n % a) + bonus;
  }

  return answer;
}
