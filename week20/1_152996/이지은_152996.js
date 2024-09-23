function solution(weights) {
  let answer = 0;
  let store = {};
  let ratio = [1, 3 / 2, 4 / 3, 2];

  weights
    .sort((a, b) => b - a)
    .forEach((w) => {
      let s;
      ratio.forEach((i) => {
        if (((s = w * i), store[s])) answer += store[s];
      });
      if (!store[w]) {
        store[w] = 1;
      } else store[w]++;
    });
  return answer;
}
arr = [100, 180, 360, 100, 270];
console.log(solution(arr));
