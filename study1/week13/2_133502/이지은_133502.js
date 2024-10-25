function solution(ingredient) {
  var answer = 0;
  let stack = [];

  for (x of ingredient) {
    stack.push(x);

    if (stack.slice(-4).join('') === '1231') {
      stack.splice(-4);
      answer++;
    }
  }
  return answer;
}
