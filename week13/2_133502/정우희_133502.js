function solution(ingredient) {
  let answer = 0;
  let stack = [];
  for (let i = 0; i < ingredient.length; i++) {
    stack.push(ingredient[i]);
    if (stack.slice(-4).join('') === '1231') {
      stack.splice(-4); // splice는 배열에서 제외시키는 함수
      answer++;
    }
  }
  return answer;
}
