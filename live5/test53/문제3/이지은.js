function solution(X, Y) {
  let answer = [];

  let Xmap = new Map();
  for (let i = 0; i < X.length; i++) {
    Xmap.set(X[i], (Xmap.has(X[i]) ? Xmap.get(X[i]) : 0) + 1);
  }

  let Ymap = new Map();
  for (let j = 0; j < Y.length; j++) {
    Ymap.set(Y[j], (Ymap.has(X[j]) ? Ymap.get(X[j]) : 0) + 1);
  }
  console.log(Xmap, Ymap);

  for ([xKey, xCount] of Xmap) {
    for ([yKey, yCount] of Ymap) {
      if (xKey === yKey) {
        answer.push(xKey.repeat(Math.min(xCount, yCount)));
      }
    }
  }
  if (answer.length === 0) return '-1';
  if (answer[0] === '0') return '0';
  return answer
    .map(Number)
    .sort((a, b) => b - a)
    .join('');
}
console.log(solution('5525', '1255'));
