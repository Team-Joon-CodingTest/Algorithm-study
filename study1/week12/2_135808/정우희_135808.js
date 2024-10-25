function solution(k, m, score) {
  const scoreCounts = Array(k + 1).fill(0);
  let answer = 0;

  for (let i = 0; i < score.length; i++) {
    scoreCounts[score[i]]++;
  }

  for (let i = k; i >= 1; i--) {
    const boxes = Math.floor(scoreCounts[i] / m);
    const remainApples = scoreCounts[i] % m;
    const price = i * m;
    answer += price * boxes;

    if (remainApples > 0) {
      scoreCounts[i - 1] += remainApples;
    }
  }

  return answer;
}
